import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    let products = await Product.find();
    let tshirts = {}
    for (const item of products) {
        if(item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color && item.availableQty > 0)){
                tshirts[item.title].color.push(item.color)
            }
            if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0){
                tshirts[item.title].size.push(item.size)
            }
            // if(!tshirts[item.title].price.includes(item.price) && item.availableQty > 0){
            //     tshirts[item.title].price.push(item.price)
            // }
        }
        else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQty > 0){
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
                // tshirts[item.title].price = [item.price]
            }
        }
    }
    res.status(200).json({ tshirts })
}

export default connectDb(handler)
