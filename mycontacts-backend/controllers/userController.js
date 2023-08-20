
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


const registerUser = asyncHandler(async (req,res)=>{

    const {username, email , password } = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    try {
        const userAvailable = await User.findOne({ email:email });

        if (userAvailable) {
            res.status(400);
            res.json({message:"User Already Exists"})
            // throw new Error("User already registered");
        }

    const hashedPassword = await bcrypt.hash(password,10);
    // console.log("hashedPassword", hashedPassword);
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });
    
    console.log("Registerd User",user );

    if(user){
        res.status(201).json({_id:user.id, email:user.email});
    }else{
        res.status(400);
        throw new Error("User data not Valid");
    }

    res.json({message:"Register the user"});



    }
    catch{
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }

});



const loginUser = asyncHandler(async (req,res)=>{

    const {email, password}=req.body;

    if(!email || !password){
        res.json(400)
        throw new Error("All field mandatory")
    }

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){

        res.status(200).json({
            accessToken
        });
    }



    res.json({message: "Login User"})
});
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message: "Current User"})
});


module.exports = {registerUser,loginUser,currentUser}