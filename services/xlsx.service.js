const User = require('../models/user.model');
const xlsx = require('xlsx');

const xlsxExport = async () => {
    
    try {
        const rawData = await User.find().select('-createdAt -updatedAt -__v -_id').lean();

        
        const cleanData = rawData.map(({ fullName, ...rest }) => ({
            fullName: fullName.toString(),
            ...rest,
        }));

        const worksheet = xlsx.utils.json_to_sheet(cleanData);

        // the creation of the book and the appending of the book
        const workbook = xlsx.utils.book_new()
        xlsx.utils.book_append_sheet(workbook, worksheet, 'SU-CAMPERS');

        const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        return buffer;
        
    } catch (error) {
        const err = new Error(error.message || 'Something went wrong');
        err.status = 400;
        throw err;
    }
}

module.exports = { xlsxExport };