const mongoose = require('mongoose')

const buildingSchema = new mongoose.Schema({
        location: {
            type: String,
            required: true
        },
        short_name: {
            type: String,
            required: true
        },
        building_type: {
            type:String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        telephone_number: {
            type: Number,
            required: true
        },
        tech_service: { //FULL,CONTRACT,DROP
            type: String,
            required: true,
            default:"FULL"
        },
        cash_can_access: {
            type: Boolean
        },
        numberOfMachines: {
            type: Number,
        },
        vault: {
            type: String,
            status: String, //WORKING,PENDING,HOLDING  
            default:"WORKING"
        },
        card_printer: {
            type: String,
            status: String, //WORKING,PENDING,HOLDING  
            default:"WORKING"
        },
        front_desk: {
            type: String,
            status: String, //WORKING,PENDING,HOLDING  
            default:"WORKING"
        },
        drop_days: [          
        {
            Monday: {
                type: Boolean,
                default: false
            },
            Tuesday: {
                type: Boolean,
                default: false
            },
            Wednesday: {
                type: Boolean,
                default: false
            },
            Thursday: {
                type: Boolean,
                default: false
            },
            Friday: {
                type: Boolean,
                default: false
            }
        }]
    })

    module.exports = mongoose.model('Buildings', buildingSchema)