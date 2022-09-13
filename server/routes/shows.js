const express = require('express');
const router = express.Router();
const Anime = require('../models/showModel');
router.get('/', (req, res, next) => {
  // get placeholder
Anime.find({}, 'anime')
.then((data) => res.json(data))
.catch(next);
});
router.post('/', (req, res, next) => {
  // post placeholder
  if(req.body.action){
    Anime.create(req.body)
    .then((data) => res.json(data))
    .catch(next)
  } else {
    res.json({
        error: "Error",
    });
  }
});

router.delete('/', (req, res, next) => {
  // delete placeholder
});
module.exports = router;