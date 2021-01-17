const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    lastName: String,
    avatarUrl: String,
    email: {
        type: String, 
        unique:true
    },
    address: [
        {
            street: String, // Rua
            number: Number, // Número
            district: String, // Bairro
            city: String, // cidade
            state: String, // estado
            country: String, // País
            postalCode: String, // CEP
        }
    ],
    location: [
        {
            name: String,
            type: {
                type: String,
                enum: ['Point'], // 'location.type' must be 'Point'
                required: true
              },
              coordinates: {
                type: [Number],
                required: true
              }
        }
    ],
    favoriteList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service'
        }
    ]
});


module.exports = mongoose.model('Account', AccountSchema)