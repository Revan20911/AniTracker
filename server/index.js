const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(require("./routes/shows"));

const dbo = require("./db/connection");


// db.once('open', () => {
//   var showSchema = mongoose.Schema({
//     title: String,
//     genre: String, 
//     desc: String, 
//     cover: String, 
//   });

//   var Show = mongoose.model('Show', showSchema, 'showlist');
//   var show1 = new Show({genre: "comedy", title: "Gintama", desc: "test",cover: "test" });

//   show1.save((err, show) => {
//     if (err) return console.log(err);
//     console.log(show.title);
//   });
// });



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use((req, res, next) => {
  res.send('Welcome to Express');
});
app.listen(port, () => {
  dbo.connectToServer((err)=> {
    if(err) console.log(err);
  });
  console.log(`Server running on port ${port}`);
});