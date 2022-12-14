const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(require("./routes/shows"));
app.use(require("./routes/trailers"));
app.use(require("./routes/upcoming"));
app.use(require("./routes/users"));


mongoose.connect(process.env.DB, {

  useNewUrlParser: true,
  useUnifiedTopology: true,

})

mongoose.Promise = global.Promise;

const path = require("path");


app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
});

app.get('/', (req, res) => { res.send('Hello from Express!');


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res) => {
  res.send('Welcome to Express');
});

app.listen(procees.env.PORT,  () => {
  console.log(`Server running on port ${procees.env.PORT}`);
});
