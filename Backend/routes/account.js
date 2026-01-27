const express = require("express")
const { authMiddleware } = require("../authMiddleware")
const router = express.Router()
const mongoose = require ('mongoose')
const {Account} = require("../db")



router.get("/balance" , authMiddleware,async (req , res )=>{
const account = await Account.findOne({
    userId : req.userId
});
    res.json({
        balance : account.balance
    })
})

router.post("/transfer" , authMiddleware , async(req , res )=>{
    const session = await mongoose.startSession(); 
    session.startTransaction();
    const {to , amount} = req.body;
    const account = await Account.findOne({userId : req.userId}).session(session);
    if(account.balance < amount){
        res.json({
            msg : "Insufficient Balance"
        })
    }; 

    const toaccount = await Account.findOne({ userId : to}).session(session);

    if(!toaccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg : "No Account found"
        });

    }
     try { 
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
     
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });}
    catch(err){
        await session.abortTransaction();
    }
    finally {
        session.endSession();
    }
});
    
module.exports = router;