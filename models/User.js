const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("User", userSchema);