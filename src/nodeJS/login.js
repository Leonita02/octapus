const express=require('express');
const router=express.Router();
const connection=require('./db_connection');


router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(`SELECT * FROM useri WHERE email='${username}' AND password='${password}'`, (error, data) => {
        if (error) {
            res.status(500).json({ message: 'Error logging in' });
        } else if (data.length === 0) {
            res.status(401).json({ message: 'Invalid email or password' });
        } else {
            const user = data[0];
            res.json({
                role: user.Roli_ID
            });
        }
    });
});
module.exports=router;