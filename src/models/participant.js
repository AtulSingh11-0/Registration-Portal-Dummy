
const moment = require('moment/moment');
const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name :{
    type: String,
    trim: true,
    required: true
  },
  email :{
    type: String,
    unique:true,
    required: true
  },
  phone :{
    type: Number,
    min: 10,
    required: true
  },
  date :{
    type: Date,
    default: Date.now()
    // default: moment().format('LLLL')
  }
});

const Participant = new mongoose.model('Participant', participantSchema);

module.exports = Participant;