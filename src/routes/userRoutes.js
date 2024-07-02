const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { allocateUsersToAstrologers } = require('../services/flowDistributionService');

// Allocate users to astrologers
router.post('/allocate', async (req, res) => {
    const { users } = req.body;
    await allocateUsersToAstrologers(users);
    res.send('Users allocated successfully');
});

module.exports = router;
