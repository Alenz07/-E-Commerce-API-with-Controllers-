
const http = require("http")
const express = require("express")
app = express()
product= require("./products")
user= require("./user")
cart  = require("./cart")


app.use("/cart",cart)
app.use("/product",(product))
app.use("user",user)
app.get("/", (req,res)=>{
    res.send("This is my Ecommerce API")
})
const server = http.createServer(app)
server.listen(2000)


