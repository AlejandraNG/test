const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
    unique: true,
  },
  year: {
    type: Number,
    default: 1,
  },
  section: {
    type: String
  },
  carrers:[{
    type: String
  }]
});

const School = mongoose.model("school", SchoolSchema);
module.exports = School;

