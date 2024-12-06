// server/models/Trade.js
const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['CALL', 'PUT'],
        required: true
    },
    stake: {
        type: Number,
        required: true
    },
    entry: {
        type: Number,
        required: true
    },
    result: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'won', 'lost'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Trade', tradeSchema);