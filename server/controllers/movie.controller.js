const Movie = require("../models/movie.model");

module.exports.createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200);
    res.json(newMovie);
  } catch (error) {
    res.status(500);
    res.json(error);
    console.log(error.message);
  }
};
module.exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200);
    res.json(movies);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json(error);
  }
};
module.exports.getMovieID = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findOne({ _id: id });
    res.status(200);
    res.json(movie);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMovie = await Movie.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200);
    res.json(updatedMovie);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.deleteOne({ _id: id });
    res.status(200);
    res.json(deletedMovie);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
