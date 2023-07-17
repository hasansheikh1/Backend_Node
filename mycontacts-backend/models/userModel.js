const mongoose = require("mongoose");


const userSchema = mongoose.Schema({


username:{
    type:String,
    required:[true,"Username is required"]
},
email:{
    type:String,
    required:[true,"please add the user email address"],
    unique: [true, "Email is already taken!"]
},

password:{
    type:String,
    required:[true,"Adduser password"],
},
},

{
    timestamps: true,
}


);

module.exports = mongoose.model("User",userSchema);