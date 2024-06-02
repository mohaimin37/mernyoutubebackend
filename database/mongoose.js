const mongoose =  require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Flipcart").then(()=>{
console.log("you are going correctly")
}).catch(()=>{
    console.log("something something haha delete it ")
})
module.exports = mongoose

