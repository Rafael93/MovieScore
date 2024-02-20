const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      min: [4, "Insert a valid year"],
    },
    category: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
      minLenght: [8, "insert at least the name and a lastname"],
    },
    description: {
      type: String,
      required: true,
      minLenght: [15, "Please enter a property description"],
    },
    comments: [{ body: String, date: Date }],
    meta: {
      MovieScoreRating: Number,
      UserRating: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;
