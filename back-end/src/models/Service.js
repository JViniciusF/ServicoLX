const mongoose = require('mongoose');


const ServiceSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    name: String,
    description: String,
    celphone: String,
    images : [ String ], 
    category: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    } ],
    value: String,
    scheduleDates: {
        type: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Schedule'
        }],
    },
    created_at: { 
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Service', ServiceSchema)