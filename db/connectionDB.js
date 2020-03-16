const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Repos", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

// const UsersSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String
// });

// const Users = new mongoose.model("users", UsersSchema);
