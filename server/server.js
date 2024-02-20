require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8000;

//config DB
require("./config/mongoose.config");
//config cookie parser
app.use(cookieParser());

//config cors
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

//use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config routes
const userRoutes = require("./routes/user.routes");
app.use("/api/user", userRoutes);

const movieRoutes = require("./routes/movie.routes");
app.use("/api/movie", movieRoutes);

//config listening
app.listen(port, () => console.log(`Listening on port: ${port}`));
