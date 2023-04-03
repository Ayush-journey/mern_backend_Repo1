const express = require('express');
const router = express.Router();

const getinspiration = require('../controllers/getinspiration');
const postinspiration = require('../controllers/postinspiration');

router.get('/getinspiration', getinspiration);
router.post('/postinspiration', postinspiration);

module.exports = router;