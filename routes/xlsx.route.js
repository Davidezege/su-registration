const router = require('express').Router();
const { xlsxExport } = require('../controllers/xlsx.controller');

router.get('/xlsxExport', xlsxExport);

module.exports = router;