const Flight = require('../models/flight');

module.exports = {
  create,
}

async function create(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    console.log(flight);
    console.log(req.body);
    flight.destinations.push(req.body);
    flight.save();
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.render('flights/show', {
      title: "Flight Details",
      errorMsg: err.message
    });
  }
}