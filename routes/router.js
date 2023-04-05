const express = require('express');
const router = express.Router();

const getinspiration = require('../controllers/getinspiration');
const postinspiration = require('../controllers/postinspiration');

const gettopbrand = require('../controllers/gettopbrand');
const posttopbrand = require('../controllers/posttopbrand');

const getdeliveryrestaurant = require('../controllers/getdeliveryrestaurant');
const postdeliveryrestaurant = require('../controllers/postdeliveryrestaurant');

router.get('/getinspiration', getinspiration);
router.post('/postinspiration', postinspiration);

router.get('/gettopbrand', gettopbrand);
router.post('/posttopbrand', posttopbrand);

router.get('/getdeliveryrestaurant', getdeliveryrestaurant);
router.post('/postdeliveryrestaurant', postdeliveryrestaurant);

module.exports = router;