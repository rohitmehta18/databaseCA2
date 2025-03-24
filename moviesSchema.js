const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  genre: String,
  releaseYear: Number,
  availableCopies: Number,
});

module.exports = mongoose.model("movie", movieSchema);

