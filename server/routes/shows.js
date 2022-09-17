const express = require("express");
const showRoutes = express.Router();



const dbo = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;
//Get all shows
showRoutes.route("/shows").get((req, res) => {
  let db_connect = dbo.getDb("shows");
  db_connect
  .collection("shows")
  .find({})
  .toArray((err, result) => {
    if(err) throw err;
    res.json(result);
  });
});

//Get specific show

showRoutes.route("/shows/:id").get((req, res)=>{
  let db_connect = dbo.getDb();
  let myquery = {_id: ObjectId(req.params.id)};
  db_connect
  .collection("shows")
  .findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Add new show


showRoutes.route("/shows/add").get((req, res)=>{
  let db_connect = dbo.getDb();
  let myobj = {
    $show: {
      title: req.body.title,
      genre: req.body.genre,
      desc: req.body.desc,
      cover: req.body.cover,
    },
  };

  db_connect
  .collection("shows")
  .insertOne(myobj, (err, res) => {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = showRoutes;
