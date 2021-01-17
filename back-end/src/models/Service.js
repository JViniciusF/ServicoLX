const mongoose = require('mongoose');


const ServiceSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    name: String,
    description: String,
    celphone: String,
    images : String, 
    category: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    } ],
    value: Number,
    quotedTimes: {
        type: Number,
        default: 0
    },
    totalRating: {
        type: Number,
        default: 0
    },
    countRating: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
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