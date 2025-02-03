const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// All routes start with '/'

// GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

module.exports = router;