import connectDb from "../../middleware/mongoose"
import User from "../../models/User"

const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body)
        let u = new User(req.body)
        await u.save()

        res.status(200).json({ "result": "Success" })
    } else {
        res.status(400).json(User.find())
    }
}

export default connectDb(handler)
