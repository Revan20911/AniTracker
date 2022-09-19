const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeShow = new Schema({
        title: String,
        genre: String,
        desc: String,
        cover: String,
});

const Show = mongoose.model('Show', animeShow, "showlist");

module.exports = Show;

