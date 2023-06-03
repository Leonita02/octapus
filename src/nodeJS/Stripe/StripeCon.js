require('dotenv').config();
const connection = require('../db_connection');
const express = require('express');
const app = express();
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const bodyParser = require('body-parser');


router.get("/",(req,res)=>{
    const sql = "SELECT * FROM pagesa";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  })

const storeItems = new Map([
    [1, { priceInCents: 1000, name: "Octopus Pagesë Vjetore" }],
]);


router.post('/', async (req, res) => {
    try {
        const customer = stripe.customers.create({
            metadata: {
                userID: req.body.username,
                item: JSON.stringify(req.body.storeItems)
            }
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map((item) => {
                const storeItem = storeItems.get(item.id);
                return {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                };
            }),
            customer: customer.id,
            success_url: `${process.env.CLIENT_URL}`,
            cancel_url: `${process.env.LOGIN_URL}`,
        });
        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

//Stripe webhook

router.post('/api/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;
    const sig = req.headers['stripe-signature'];

    console.log({reqKeys: Object.keys(req), Session: req.session})

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body.toString(), sig, endpointSecret);
    } catch (err) {
        console.log(`Failed to verify Stripe webhook signature. Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        console.log({session, email: session.customer_details.email})

    }

    res.status(200).end();
});


module.exports = router;
