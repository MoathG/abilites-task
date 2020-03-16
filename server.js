const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/connectionDB");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  res.json("worked");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));
