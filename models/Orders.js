const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ordersSchema = new Schema({
    ingredients: {
        salad: String,
        meat: String,
        bacon: String,
        cheese: String
    },
    delivery: {
        name: {
            type: String
        },
        email: {
            type: String,
        },
        street: {
            type: String,
        },
        postalcode: {
            type: String,
        },
        preference: {
            type: String
        }
    },
    price: {
        type: Number
    },
    userId: { type: String }

}, {
    collection: 'orders'
})

module.exports = mongoose.model('Orders', ordersSchema);