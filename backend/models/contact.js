import mongoose from "mongoose";
import validator from "validator";


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});


export default mongoose.model("Contact", ContactSchema, "Contact");
