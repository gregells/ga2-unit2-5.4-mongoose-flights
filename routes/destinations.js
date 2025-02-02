var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// All routes start with '/'

// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;
