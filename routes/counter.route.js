const router = require('express').Router();
const { getNextCampId } = require('../controllers/counter.controller');

router.use('/counter', getNextCampId);

module.exports = router;