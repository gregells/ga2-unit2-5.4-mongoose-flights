const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show,
}

async function index(req, res) {
  try {
    const flights = await Flight.find({}).sort({ departs: 1 });
    const currentDate = new Date();
    res.render('flights/index', {
      title: "All Flights",
      flights,
      currentDate,
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

function newFlight(req, res) {
  // Create default time to pass to template:
  const newFlight = new Flight();
  const departs = newFlight.departs;
  let defaultDeparts = `${departs.getFullYear()}`;
  defaultDeparts += `-${(departs.getMonth()+1).toString().padStart(2, '0')}`
  defaultDeparts += `-${departs.getDate().toString().padStart(2, '0')}`
  defaultDeparts += `T${departs.getHours()}:${departs.getMinutes()}`;
  
  res.render('flights/new', {
    title: 'Add New Flight',
    defaultDeparts,
    errorMsg: '',
  });
}

async function create(req, res) {
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.render('flights/new', { 
      title: 'Add New Flight',
      errorMsg: err.message,
      defaultDeparts: ''
    });
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {
      title: 'Flight Details',
      errorMsg: '',
      flight
    });
  } catch (err) {
    console.log(err);
    res.render('flights/show', {
      title: "All Flights",
      errorMsg: err.message
    });
  }
}