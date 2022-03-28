// userModel.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    userid: {type: String, required:true},
    name: {type: String, required:true},
    address: {type: String, required:false},
    createdAt: {type: Date},
    updatedAt: {type: Date}
});

module.exports = mongoose.model("users", schema);
