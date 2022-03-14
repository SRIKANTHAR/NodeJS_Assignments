const mongoose = require("mongoose");
const {Schema} = mongoose;


const userSchema = new Schema({
    full_name: String,
    email: {type:String, unique:true},
    age: Number,
    city: String,
    profession: String,
    isPromoted: {type:Boolean, default:null}
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;