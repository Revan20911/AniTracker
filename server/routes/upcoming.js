const express = require("express");
const upcRoutes = express.Router();
const dbo = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;


upcRoutes.route("/upcoming").get(function (req, res){
    let db_connect = dbo.getDb();
    db_connect.collection("upcoming")
    .find()
    .toArray((err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });
  //Get specific upcoming image
upcRoutes.route("/upcoming/:id").get((req, res)=>{
    let db_connect = dbo.getDb();
    let myquery = {_id: ObjectId(req.params.id)};
    db_connect
    .collection("upcoming")
    .findOne(myquery, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  module.exports = upcRoutes;
