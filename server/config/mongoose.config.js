const mongoose = require("mongoose");

const DB_NAME = "MovieScore";

mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb://127.0.0.1/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((err) => console.log("ERROR WITH DB:" + err));
