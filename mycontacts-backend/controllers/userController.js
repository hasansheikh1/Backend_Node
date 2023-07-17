
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");


const registerUser = asyncHandler(async (req,res)=>{

    const {username, email , password } = req.body;

    if(!username || !password || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findone({email})
    res.json ({ message:"Register the user"})
});
const loginUser = asyncHandler(async (req,res)=>{
    res.json({message: "Login User"})
});
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message: "Current User"})
});


module.exports = {registerUser,loginUser,currentUser}