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

const getAllUsers = async () => {
    const users = User.find();

    if(!users) {
        const err = new Error('No Users found');
        err.status = 404;
        return err;
    }

    return users
}

module.exports = { register, getAllUsers };