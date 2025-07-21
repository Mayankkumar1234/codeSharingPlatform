const mongoose = require("mongoose");

const codeschema = new mongoose.Schema(
  {
    html: String,
    css: String,
    javascript: String,
  },
  { timestamps: true }
);

Code = mongoose.model("Code", codeschema);
module.exports = Code;
