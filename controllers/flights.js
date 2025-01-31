const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
}

async function index (req, res) {
  try {
    const flights = await Flight.find({});
    res.render('flights/index', {
      title: "All Flights",
      flights,
      errorMsg: ''
    });
  } catch (err) {
    console.log(err);
    res.render('flights/index', {
      title: "All Flights",
      errorMsg: err.message
    });
  }
}

function newFlight (req, res) {
  res.render('flights/new', {
    title: 'Add New Flight',
    errorMsg: ''
  });
}

async function create (req, res) {
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.render('flights/new', { 
      title: 'Add New Flight',
      errorMsg: err.message
    });
  }
}