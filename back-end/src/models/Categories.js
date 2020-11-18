const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    images: String
})


module.exports = mongoose.model('Category', CategorySchema)