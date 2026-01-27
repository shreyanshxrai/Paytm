const mongoose = require("mongoose");
mongoose.connect("");
const userschema = new mongoose.Schema({
     username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
});

const accountschema = new mongoose.Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, required: true }, 
}); 
const User = mongoose.model('User', userschema);
const Account = mongoose.model('Account' ,  accountschema);

module.exports ={User,Account};