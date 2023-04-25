
const express = require('express');

const router = express.Router();



const usersController = require('../Controllers/users_controller');

router.get('/profile', usersController.profile);
router.use('/users', require('./users'));
module.exports = router;
