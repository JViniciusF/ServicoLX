const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    img: String
})


module.exports = mongoose.model('Category', CategorySchema)