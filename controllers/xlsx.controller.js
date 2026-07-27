const xlsxService = require('../services/xlsx.service');

const xlsxExport = async (req, res) => {
    try {
        const buffer = await xlsxService.xlsxExport();
        
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader('Content-Disposition', 'attachment; filename=users_export.xlsx');

        res.send(buffer);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Internal Server Error'
        })
    }
}

module.exports = { xlsxExport }