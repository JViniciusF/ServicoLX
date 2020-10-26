const mongoose = require('mongoose');
const { CategorySchema } = require('../models/Categories')
const { AccountSchema } = require('../models/Account')
const { ScheduleSchema } = require('../models/Schedule')


const ServiceSchema = new mongoose.Schema({
    owner: AccountSchema,
    title: String,
    description: String,
    category: [ CategorySchema ],
    value: Number,
    scheduleDates: {
        type: [ ScheduleSchema ],
    },
    created_at: { 
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Service', ServiceSchema)