// const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");
// const UserSchema = new mongoose.Schema({
//     username:String,
//     phone:String,
//     email:String,
//     password:String,
//     Company:String
// }) ;
// UserSchema.plugin(passportLocalMongoose);
// module.exports = mongoose.model("User",UserSchema);
// const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");
// const UserSchema = new mongoose.Schema({
//     username:String,
//     password:String,
//     phone:Number,
//     telephone:Number
// }) ;
// UserSchema.plugin(passportLocalMongoose);
// module.exports = mongoose.model("User",UserSchema);
// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema,
//     passportLocalMongooseEmail = require('passport-local-mongoose-email');

// var User = new Schema({
//     username:String,
//     password:String,
//     phone:Number,
//     telephone:Number
// });

// User.plugin(passportLocalMongooseEmail);

// module.exports = mongoose.model('User', User);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username:String,
    password:String,
    phone:Number,
    telephone:Number
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);