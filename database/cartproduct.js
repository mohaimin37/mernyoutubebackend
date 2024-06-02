const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String


})
const model = new mongoose.model("carauselproduct",schema)
module.exports = model 