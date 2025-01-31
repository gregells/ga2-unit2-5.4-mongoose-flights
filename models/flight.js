const mongoose = require('mongoose');
// Create shortcut to the mongoose.Schema class:
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Air New Zealand', 'Air Canada', 'Flair', 'Porter', 'United']
  },
  airport: {
    type: String,
    enum: ['AKL', 'WLG', 'YHZ', 'YVR', 'YYZ'],
    default: 'YYZ'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);