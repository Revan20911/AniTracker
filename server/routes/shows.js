const express = require("express");
const showRoutes = express.Router();
const dbo = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;


//Get all shows
showRoutes.route("/shows").get(function (req, res){
  let db_connect = dbo.getDb();
  db_connect.collection("showlist")
  .find()
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
  .collection("showlist")
  .findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Add new show
showRoutes.route("/shows/add").post( function (req, response){
  let db_connect = dbo.getDb();
  let myobj = {
      id: req.body.id,
      title: req.body.title,
      genre: req.body.genre,
      desc: req.body.desc,
      cover: req.body.cover,
  };

  db_connect
  .collection("showlist")
  .insertOne(myobj, function (err, res){
    if (err) throw err;
    response.json(res);
  });
});

module.exports = showRoutes;
