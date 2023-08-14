
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt");
const User = require("../models/userModel");


const registerUser = asyncHandler(async (req,res)=>{

    const {username, email , password } = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    // const userCount = await User.countDocuments();

    // if(userCount !== 0){

        const userAvailable = await User.findone({email})
    // }

    if(userAvailable){        
        res.status(400);
        throw new Error("User already registered");

    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log("hashedPassword", hashedPassword);
    res.json({message:"Register the user"});

});



const loginUser = asyncHandler(async (req,res)=>{
    res.json({message: "Login User"})
});
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message: "Current User"})
});


module.exports = {registerUser,loginUser,currentUser}