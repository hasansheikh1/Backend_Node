const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please add contact name"],
    },

    email:{
        type: String,
        required: [true, "Email is mandatory"],
    },

    phone: {
        type: String,
    },


},
{
    timestamps:true,
}
);

    module.exports = mongoose.model("Contact", contactSchema);