const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const aniList = new Schema({
    list:{
        id: String,
        arr: [],

    },
})

module.exports = aniList;