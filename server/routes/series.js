const express = require("express");
const seriesRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Show = require("../models/ShowModel");