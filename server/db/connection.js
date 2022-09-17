const  {MongoClient} = require("mongodb");
require('dotenv').config();


const client = new MongoClient(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback){
        client.connect((err, db) => {
            if(db)
            {
                _db = db.db("shows");
                console.log("Successfully connected to database.");
            }
            return callback(err);
        })
    },

    getDb: function (){
        return _db;
    },
};