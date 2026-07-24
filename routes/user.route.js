const router = require('express').Router();
const {register, getAllUsers} = require('../controllers/user.controller')

router.post('/register', register);
router.get('/users', getAllUsers);

module.exports = router;
