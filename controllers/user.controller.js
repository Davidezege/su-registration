const userService = require('../services/user.service');

const register = async (req, res) => {
    try {
        const { fullName, category, gender, phone, pilgrimGroup, schoolName, campId, community, addtionalInfo } = req.body;

        // Validate required fields (phone and schoolName are optional)
        const requiredFields = ['fullName', 'category', 'gender', 'campId', 'community'];
        const missing = requiredFields.filter(field => !req.body[field]);
        if (missing.length > 0) {
            return res.status(400).json({ message: 'Missing required fields', missing });
        }

        const user = await userService.register(fullName, category, gender, phone, pilgrimGroup, schoolName, campId, community, addtionalInfo);
        res.status(201).json({ message: 'User registered successfully', data: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register };