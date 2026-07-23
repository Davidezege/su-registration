const router = require('express').Router();
const userRoute = require('./user.route');
const counterRoute = require('../routes/counter.route')

router.use('/user', userRoute);
router.use('/count', counterRoute);

module.exports = router