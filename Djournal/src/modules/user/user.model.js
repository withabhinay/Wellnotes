
const { required } = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userId: {type: String,required: true,unique: true} 
}, {
    timestamps: true,
    autoIndex: true, 
    autoCreate: true
}); 
   
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel

