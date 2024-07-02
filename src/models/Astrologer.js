
const mongoose = require('mongoose');

const AstrologerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isTopAstrologer: { type: Boolean, default: false },
    currentConnections: { type: Number, default: 0 }
});

module.exports = mongoose.model('Astrologer', AstrologerSchema);
