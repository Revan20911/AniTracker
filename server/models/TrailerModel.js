const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailers = new Schema({
    title: String,
    src: String, 
});

const Trailer = mongoose.model("Trailer", trailers, "trailers");

module.exports = Trailer;