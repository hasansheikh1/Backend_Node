


const asyncHandler =require("express-async-handler");
const Contact = require("../models/contactModel");


//desc : get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {

    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//desc : get contact
//@route GET /api/contacts/:id
//@access public

const getContact =asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}` });
});

//desc create contacts
//route POST /api/contacts
//access public

const createContact =asyncHandler(async (req,res)=>{
    console.log(req.body) 
    const {name, email, phone} = req.body;

    if(!name||!email||!phone){
        res.status(400)
        throw new Error("All fields are mandatory");

    }

    res.status(201).json({message:"create contact" });
});

const deleteContact =asyncHandler( async (req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}` });
});
const updateContact =asyncHandler( async (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}` });
});

module.exports ={deleteContact, getContacts, createContact, getContact,updateContact };