// test/testFlowDistribution
const mongoose = require('mongoose');
const assert = require('assert');
const Astrologer = require('../models/Astrologer');
const User = require('../models/User');
const { allocateUsersToAstrologers } = require('../services/flowDistributionService');

mongoose.connect('mongodb+srv://ashwaniloveyou83:Q4vaqBHHyJeCtTV1@cluster0.bexnewj.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');

        // Setup test data
        await Astrologer.deleteMany({});
        await User.deleteMany({});

        const testAstrologers = [
            new Astrologer({ name: 'Astrologer 1' }),
            new Astrologer({ name: 'Astrologer 2', isTopAstrologer: true })
        ];
        await Astrologer.insertMany(testAstrologers);

        const testUsers = [
            new User({ name: 'User 1' }),
            new User({ name: 'User 2' })
        ];

        // Run the allocation function
        await allocateUsersToAstrologers(testUsers);

        // Assertions
        const astrologers = await Astrologer.find();
        assert.strictEqual(astrologers[0].currentConnections, 1);
        assert.strictEqual(astrologers[1].currentConnections, 1);

        console.log('Test passed');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
