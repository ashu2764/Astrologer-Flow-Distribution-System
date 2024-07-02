const express = require('express');
const router = express.Router();
const Astrologer = require('../models/Astrologer');

// Create a new astrologer
router.post('/', async (req, res) => {
    const { name, isTopAstrologer } = req.body;
    const astrologer = new Astrologer({ name, isTopAstrologer });
    await astrologer.save();
    res.send(astrologer);
});

// Toggle top astrologer status
router.post('/toggle-top', async (req, res) => {
    const { astrologerId } = req.body;
    const astrologer = await Astrologer.findById(astrologerId);
    if (astrologer) {
        astrologer.isTopAstrologer = !astrologer.isTopAstrologer;
        await astrologer.save();
        res.send(`Astrologer ${astrologer.name} top status toggled to ${astrologer.isTopAstrologer}`);
    } else {
        res.status(404).send('Astrologer not found');
    }
});

// Get all astrologers
router.get('/', async (req, res) => {
    const astrologers = await Astrologer.find();
    res.send(astrologers);
});

module.exports = router;
