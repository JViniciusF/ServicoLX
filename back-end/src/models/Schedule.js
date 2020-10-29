const mongoose = require('mongoose');


const ScheduleSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    serviceId: {
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service'
        }
    }
})

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = {Schedule, ScheduleSchema}