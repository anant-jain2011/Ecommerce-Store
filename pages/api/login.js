import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({ "email": req.body.email });

        var bytes = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET);
        var decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (user) {
            if (req.body.email === user.email && req.body.password === decryptedPassword) {
                var token = jwt.sign({ "result": "Success", name: user.name, email: user.email }, process.env.JWT_SECRET);
                res.status(200).json({ token })
            }
            else {
                res.status(400).json({ "error": "Invalid Credentials" })
            }
        }
        else {
            res.status(400).json({ "error": "User not found!" })
        }
    }

    else {
        res.status(400).json({ "error": "This method is not allowed" })
    }
}

export default connectDb(handler)