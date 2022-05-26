// REQUIRE MONGOOSE: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// SCHEMA:
const languageSchema = new Schema({
    name: { type: String, required: true },
    greeting: String,
    pangram: String,
    filler: String
})

// MODEL AND EXPORT: 
const Language = mongoose.model('Language', languageSchema)
module.exports = Language