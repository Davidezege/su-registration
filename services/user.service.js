const User = require('../models/user.model');

const register = async (fullName, category, gender, phone, pilgrimGroup, schoolName, campId, community, addtionalInfo) => {
    const newUser = {
        fullName,
        category,
        gender,
        phone,
        pilgrimGroup,
        schoolName,
        campId,
        community,
        addtionalInfo
    };

    // User.create already saves the document; return the created user directly
    const user = await User.create(newUser);
    return user;
};

module.exports = { register };