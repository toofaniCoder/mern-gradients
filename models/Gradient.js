const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GradientSchema = new Schema({
  name: {
    type: String,
    default: "unamed",
  },
  downloads: {
    type: Number,
    default: 0,
  },
  colors: {
    start: String,
    end: String,
    direction: {
      type: String,
      default: "to bottom",
    },
  },
});

module.exports = mongoose.model("gradients", GradientSchema);
