const express = require('express');
const router = express.Router();
router.use('/v1', require('./v1'));
module.exports = router;

// http://localhost:8000/api/v1/posts