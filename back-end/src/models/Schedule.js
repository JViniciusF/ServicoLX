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


module.exports = mongoose.model('Schedule', ScheduleSchema)