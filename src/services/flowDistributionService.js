
const Astrologer = require('../models/Astrologer');
const User = require('../models/User');

const allocateUsersToAstrologers = async (users) => {
    const astrologers = await Astrologer.find();
    const topAstrologers = astrologers.filter(astrologer => astrologer.isTopAstrologer);
    const regularAstrologers = astrologers.filter(astrologer => !astrologer.isTopAstrologer);

    let userIndex = 0;
    const totalAstrologers = astrologers.length;

    while (userIndex < users.length) {
        for (let i = 0; i < totalAstrologers && userIndex < users.length; i++) {
            const astrologer = astrologers[i % totalAstrologers];
            if (astrologer.isTopAstrologer && userIndex % 2 === 0) {
                astrologer.currentConnections++;
                await astrologer.save();
                userIndex++;
            } else if (!astrologer.isTopAstrologer) {
                astrologer.currentConnections++;
                await astrologer.save();
                userIndex++;
            }
        }
    }
};

module.exports = { allocateUsersToAstrologers };
