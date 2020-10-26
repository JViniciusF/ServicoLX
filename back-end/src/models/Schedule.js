const mongoose = require('mongoose');
const { AccountSchema } = require('../models/Account')


const ScheduleSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    clientId: {
        type: AccountSchema
    }
})

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = {Schedule, ScheduleSchema}