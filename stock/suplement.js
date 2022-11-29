const mongoose = require ("mongoose")

const Schema = mongoose.Schema
const suplementSchema = new Schema({
    suplemento: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    servicios: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    vencimiento: {
        type: Number,
        required: true
    }
    
})

const Suplement = mongoose.model('Suplement', suplementSchema)
module.exports = {Suplement}