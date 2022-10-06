const express = require("express");
const userRoutes = express.Router();
const bcrypt = require("bcrypt");
const UserSchema = require("../models/UserModel");

userRoutes.post('/register', async(req, res) => {
    
    if (!req.body.email|| !req.body.password)
    return res.status(400).json({msg: "Password and Email are required."})

    if (password.length < 8){
        return res.status(400).json({msg: "Password must be at least 8 characters."})
    }

    const user = await UserSchema.findOne({email: req.body.email});
    if(user) return res.status(400).json({msg: "That email already exists."})

    const newUser  = new UserSchema({
        email: req.body.email,
        password: req.body.password
    })
    bcrypt.hash(password, 7, async(err, hash) => {
        if(err)
            return res.status(400).json({msg: "Error when trying to save the password."})
            newUser.password = hash;
            newUser.save((err, result) => {
                if (err) throw err;
                res.json(result);
            });
    });
})

userRoutes.post('/login', async (req, res) => {
    

    if (!req.body.email || !req.body.password){
        return res.status(400).json({msg: "Password and Email are required."})
    }

    const user = await UserSchema.findOne({email: req.body.email})

    if (!user) {
        return res.status(400).json({msg: "User not found."});
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if(matchPassword) {
        return res.status(200).json({msg: "Logged in successfully."});
    }else{
        return res.status(400).json({msg: "Username or Password was incorrect."})
    }
})

// userRoutes.route("/users/:id").get((req, res)=>{
//     let db_connect = dbo.getDb();
//     let myquery = {_id: ObjectId(req.params.id)};
//     db_connect
//     .collection("users")
//     .findOne(myquery, (err, result) => {
//       if (err) throw err;
//       res.json(result);
//     });
//   });
  
  module.exports = userRoutes;