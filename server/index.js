const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(require("./routes/shows"));
app.use(require("./routes/trailers"));
app.use(require("./routes/upcoming"));


const dbo = require("./db/connection");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use((req, res) => {
  res.send('Welcome to Express');
});
app.listen(port, () => {
  dbo.connectToServer((err)=> {
    if(err) console.log(err);
  });
  console.log(`Server running on port ${port}`);
});