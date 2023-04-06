const express = require('express');
const router = express.Router();

const getinspiration = require('../controllers/getinspiration');
const postinspiration = require('../controllers/postinspiration');

const gettopbrand = require('../controllers/gettopbrand');
const posttopbrand = require('../controllers/posttopbrand');

const getdeliveryrestaurant = require('../controllers/getdeliveryrestaurant');
const postdeliveryrestaurant = require('../controllers/postdeliveryrestaurant');

const getdineoutcollection = require('../controllers/getdineoutcollection');
const postdineoutcollection = require('../controllers/postdineoutcollection');

const getdineoutrestaurant = require('../controllers/getdineoutrestaurant');
const postdineoutrestaurant = require('../controllers/postdineoutrestaurant');

const getnightlifecollection = require('../controllers/getnightlifecollection');
const postnightlifecollection = require('../controllers/postnightlifecollection');

const getnightliferestaurant = require('../controllers/getnightliferestaurant');
const postnightliferestaurant = require('../controllers/postnightliferestaurant');

router.get('/getinspiration', getinspiration);
router.post('/postinspiration', postinspiration);

router.get('/gettopbrand', gettopbrand);
router.post('/posttopbrand', posttopbrand);

router.get('/getdeliveryrestaurant', getdeliveryrestaurant);
router.post('/postdeliveryrestaurant', postdeliveryrestaurant);

router.get('/getdineoutcollection', getdineoutcollection);
router.post('/postdineoutcollection', postdineoutcollection);

router.get('/getdineoutrestaurant', getdineoutrestaurant);
router.post('/postdineoutrestaurant', postdineoutrestaurant);

router.get('/getnightlifecollection', getnightlifecollection);
router.post('/postnightlifecollection', postnightlifecollection);

router.get('/getnightliferestaurant', getnightliferestaurant);
router.post('/postnightliferestaurant', postnightliferestaurant);

module.exports = router;