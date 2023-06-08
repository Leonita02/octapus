require('dotenv').config();
const connection = require('../db_connection');
const express = require('express');
const app = express();
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const bodyParser = require('body-parser');


// router.get("/",(req,res)=>{
//     const userId = req.query.userId;
//     const sql = "SELECT * FROM pagesa";
//     connection.query(sql,(err,data)=>{
//       if(err)return res.json("Error");
//       return res.json(data);
//     }
//     )
//   })

  router.get("/",(req,res)=>{
    const userId = req.query.userId;
  const sql = "select * from Personi p inner join Useri u on p.Personi_ID=u.Personi_ID inner join Pagesa pg on pg.Personi_ID=p.Personi_ID and u.Useri_ID=?";
  const values = [userId];

  connection.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error retrieving pagesa" });
    }
    return res.json(data);
  });
});

const storeItems = new Map([
    [1, { priceInCents: 1000, name: "Octopus Pagesë Vjetore" }],
]);


router.post('/', async (req, res) => {
    try {
        console.log('User data:', req.body);
        const customer = stripe.customers.create({
            metadata: {
                username: req.session.username,
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

    const session = event.data.object;
    console.log('webhook data:',session);

    console.log({reqKeys: Object.keys(req), Session: req.session})

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body.toString(), sig, endpointSecret);
    } catch (err) {
        console.log(`Failed to verify Stripe webhook signature. Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        try {
            // Retrieve the username from the session
            const username = req.session.username;
    
            // Query the database to get the Person_ID associated with the username
            const sql = "SELECT Person_ID FROM useri WHERE username = ?";
            connection.query(sql, [username], (err, results) => {
                if (err) {
                    console.error('Error retrieving Person_ID from useri table:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
    
                if (results.length === 0) {
                    console.error('No user found with the provided username');
                    return res.status(400).json({ error: 'Invalid username' });
                }
    
                const personId = results[0].Person_ID;

                
    
          
    
            });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
    });

        // console.log({session, email: session.customer_details.email});
        // const username = req.session.username;
        
        //  // Query the database to get the Person_ID associated with the username
        //  const sql = "SELECT Person_ID FROM useri WHERE username = ?";
       


        // connection.query(sql, values, (err, result) => {
        //     if (err) {
        //       console.error('Error inserting data into pagesa table:', err);
        //       return res.status(500).json({ error: 'Internal Server Error' });
        //     }
      
        //     console.log('Data inserted into pagesa table:', result);
      
        //     // Respond with a success status
        //     res.status(200).end();
        //   });
        // } else {
        //   // Handle other event types if needed
        //   console.log('Unhandled event type:', event.type);
        //   res.status(200).end();
      

module.exports = router;


// router.post('/', async (req, res) => {
//     try {
//         // Retrieve the username from the session
//         const username = req.session.username;

//         // Query the database to get the Person_ID associated with the username
//         const sql = "SELECT Person_ID FROM useri WHERE username = ?";
//         connection.query(sql, [username], (err, results) => {
//             if (err) {
//                 console.error('Error retrieving Person_ID from useri table:', err);
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }

//             if (results.length === 0) {
//                 console.error('No user found with the provided username');
//                 return res.status(400).json({ error: 'Invalid username' });
//             }

//             const personId = results[0].Person_ID;

//             // Rest of the code to save the data in the pagesa table using the retrieved Person_ID
//             // ...

//         });
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// });