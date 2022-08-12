const mongoose = require('mongoose')


const personSchema = mongoose.Schema({
    name:{
        type: String
    },
    age :{
        type: Number
    },
    hobby:{
        type: String
    }
}, { timestamps: true})


module.exports = mongoose.model('Person', personSchema)