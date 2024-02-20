const express = require("express");

const router = express.Router();

const movieController = require("../controllers/movie.controller");
const { authenticate } = require("../config/jwt.config");

router.post("", movieController.createMovie);
router.get("", movieController.getMovies);
router.get("/:id", movieController.getMovieID);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
