const  {MongoClient} = require("mongodb");

const Db = process.env.DB;

const client = new MongoClient(Db, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback){
        client.connect(function (err, db){
            if(db)
            {
                 _db = db.db("test");
                console.log("Successfully connected to database.");
            }
            return callback(err);
        });
    },

    getDb: function (){
        
        return _db;
    },
};