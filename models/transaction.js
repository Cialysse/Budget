const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: 'enter name for this transaction'
        },
        value: {
            type: Number,
            required: 'enter transaction amount here'
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;