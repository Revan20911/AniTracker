const express = require("express");
const itemRoutes = express.Router();
const dbo = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;


itemRoutes.route("/items").get(function (req, res){
    let db_connect = dbo.getDb();
    db_connect.collection("trailers")
    .find()
    .toArray((err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });
  
  //Get specific trailer
  
  itemRoutes.route("/items/:id").get((req, res)=>{
    let db_connect = dbo.getDb();
    let myquery = {_id: ObjectId(req.params.id)};
    db_connect
    .collection("trailers")
    .findOne(myquery, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  module.exports = itemRoutes;