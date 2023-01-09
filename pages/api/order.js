import connectDb from "../../middleware/mongoose"
import Order from "../../models/Order"

const handler = async (req, res) => {
    if (req.method == "POST") {

        let o = new Order(req.body)
        await o.save()

        res.status(200).json({ "result": "Success" })
    }

    else {
        res.status(400).json({ "error": "This method is not allowed" })
    }
}

export default connectDb(handler)
