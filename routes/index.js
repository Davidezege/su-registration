const router = require('express').Router();
const userRoute = require('./user.route');
const counterRoute = require('../routes/counter.route');
const xlsxRoute = require('./xlsx.route');

router.use('/user', userRoute);
router.use('/count', counterRoute);
router.use('/xlsx', xlsxRoute);

module.exports = router