const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeShow = new Schema({
    anime: {
        genre: String,
        title: String,
        desc: String,
        cover: String,
    },
});

module.exports = animeShow;

