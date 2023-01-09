import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
const jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({ "email": req.body.email });

        if (user) {
            if (req.body.sendMail) {

                var token = jwt.sign({ "result": "Success", email: user.email }, process.env.JWT_SECRET);

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'kumkumnidhi14@gmail.com',
                        pass: 'pawo rdvs moag qzgj'
                    }
                });

                const mailOptions = {
                    from: 'kumkumnidhi14@gmail.com',
                    to: user.email,
                    subject: 'Password reset link',
                    html: `Hi ${user.name.split(" ")[0]},
                    <br><br>
                    Forgot your password?
                    <br>
                    We received a request to reset the password for your account.
                    <br><br>
                    To reset your password, click on the button below
                    <br>
                    Reset password
                    Or copy and paste the URL into your browser:
                    http://${process.env.NEXT_PUBLIC_HOST}/activate?token=${token}`
                };

                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        res.status(400).json(err);
                    }
                    else {
                        res.status(200).json(info);
                    }
                });

            }

            if (!req.body.sendMail) {
                user.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_JS_SECRET).toString();
                user.save()
                res.status(200).json({ "result": "Success" });
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
