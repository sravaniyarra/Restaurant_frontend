var express = require ('express')
var app = express()
var mongoose = require('mongoose')
var cors = require('cors') 
//var bodyparser = require('body-parser')
var productrouter = require('./routes/productsroutes')
var productSchema = require('./models/products.model')
var admins = require ('./models/Admin')
var adminsrouter = require('./routes/adminRouter')
var customers = require ('./models/customers')
var customersRouter = require ('./routes/customerRouter')



//app.use(bodyparser.json)
app.use(express.json())
app.use(cors()) 
app.use('/products',productrouter)  
app.use('/products',productrouter)
app.use('/products',productrouter)
app.use('/updateProduct',productrouter)
app.use('/adminget',adminsrouter)
app.use('/adminpost',adminsrouter)
app.use('/adminpatch',adminsrouter)
app.use('/admindelete',adminsrouter)
app.use('/customerget',customersRouter)
app.use('/customerpost',customersRouter)
app.use('/customerpatch',customersRouter)
app.use('/customerdelete',customersRouter)



mongoose.connect('mongodb://localhost:27017/Restaurant',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if (!err){
        console.log("DB connected successfull")
    }
    else{
        console.log('not connected')
    }
})

app.listen(3000,err=>{
    if(!err){
        console.log("App is Listening")
    }
    else{
        console.log("App crashed.....")
    }
}) 
