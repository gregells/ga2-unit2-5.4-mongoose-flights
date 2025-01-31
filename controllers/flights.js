const Flight = require('../models/flight');

module.exports = {
  index,
}

async function index (req, res) {
  const flights = await Flight.find({});
  console.log(flights);
  res.render('flights/index', {
    title: "All Flights",
    flights
  });
}