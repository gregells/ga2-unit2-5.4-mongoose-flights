const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
  res.render('tickets/new', {
    title: 'Add New Ticket',
    id: req.params.id,
    errorMsg: '',
  });
}

async function create(req, res) {
  try {
    req.body.flight = req.params.id;
    await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch(err) {
    console.log(err);
    res.render('tickets/new', { 
      title: 'Add New Flight',
      id: req.params.id,
      errorMsg: err.message,
    });
  }
}