const User = require("../models/user.model");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secretKey = process.env.JWT_SECRET_KEY;

module.exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    //buscar el usuario
    const user = await User.findOne({ email: req.body.email });
    //Si no existe se detiene y devuelve el resultado
    if (user === null) {
      res.status(401);
      res.json({ errors: { email: { messagge: "User not found" } } });
      return;
    }
    //Si existe comparamos las contraseñas
    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //Si contraseña no coincide paro y retorno resultado
    if (!validatePassword) {
      res.status(400);
      res.json({ errors: { password: { messagge: "Invalid Password" } } });
      return;
      // Si la contraseña es correcta genero jwt y cookie
    } else {
      const newJWT = JWT.sign(
        {
          _id: user._id,
        },
        secretKey
      );
      res.cookie("userToken", newJWT, { httpOnly: true });
      res.status(200);
      res.json({ message: "logged ok" });
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ errors: { server: error } });
  }
};

module.exports.logout = async (req, res) => {
  try {
    res.status(200);
    res.clearCookie("userToken");
    res.json({ message: "Logout Succesfully" });
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json(error);
  }
};
