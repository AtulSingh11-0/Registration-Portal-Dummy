const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registrations")
  .then(() => {
    console.log(`Connection successful`);
  }).catch((e) => {
    console.error(e);
  });