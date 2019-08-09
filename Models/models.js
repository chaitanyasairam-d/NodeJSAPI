const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    Name: String,
    Phone: Number,
    Email: String,
    Address: {
        Street: String,
        Area: String,
        City: String,
        Pincode: Number

    }
});

module.exports = mongoose.model('UserModel', Users, 'Users');   // mongoose.model(modelName,modelSchema,collectionName)
