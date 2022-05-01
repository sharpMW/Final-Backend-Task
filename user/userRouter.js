const express = require('express');
const router = express.Router();

const db = require("../db/index");
const User = db.users;

router.post("/createUser", async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).send({
            message: "User created",
            data: user
        });
    } catch (err) {
        res.status(400).send({
            message: "Something went wrong", err
        });
    }
});

router.get("/getUser", async (req, res)=>{
    try {
        const user = await User.findOne({
            attributes: [U_id, firstName, email],
            where: {firstName: req.body.firstName, email: req.body.email}
        })
    } catch (err){
        res.status(400).send({
            message: "Something went wrong", err
        })
    }
});

router.get("/booking", async(req, res)=>{
    try {
        
    } catch (err){
        res.status(400).send({
            message: "Something went wrong", err
        })
    }
})