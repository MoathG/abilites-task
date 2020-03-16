const bodyParser = require('body-parser');
const cors = require("cors");
const express = require("express");
const app = express();

const connectToDb = require("./db/connectionDB");
connectToDb();
const Users = require("./db/users");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  console.log(req);
  res.json("worked");
});

app.post("/login", async (req, res) => {
  const userToCheck = req.body;

  let user = await Users.auth({email: userToCheck.email});
  if(!user.length) {
    res.status(401).json('user not existed');
    return;
  }

  user = await Users.auth(userToCheck);
  if(user.length) {
    res.status(200).json(user);
    return;
  }

  res.status(401).json('email or password do not match');
});

app.post("/sign-up", async (req, res) => {
  const newUser = req.body;
  const user = await Users.auth({ email: newUser.email});

  if(user.length) {
    res.status(401).json('this email already have an account');
    return;
  }

  const addedUser = await Users.add(newUser);
  res.status(201).json(addedUser);
});

app.all('*', function(req, res){
  res.status(404).json('Not Found');
});

const PORT = 4000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));
