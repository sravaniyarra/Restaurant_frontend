var express = require ('express')
const app = express ();
var router = express.Router()
var products = require('../models/products.model')
var mongoose = require('mongoose');


router.get('/',async (req,res,next)=>{
    var data = await products.find()
    res.json(data)
}) 

router.post('/',async (req,res,next)=>{
    var reqbody = {
        name:req.body.name,
        category : req.body.category,
        description : req.body.description,
        price : req.body.price,
        imageUrl : req.body.imageUrl,
        qty : req.body.qty 

    }   
    console.log('reqbody' , reqbody)
    const postdata =  new products(reqbody)
    try {
      let usermodelRes =   await postdata.save()
      res.json({status : 'ok' , data : usermodelRes})
    } catch (error) {
       console.log("error" , error) 
    }

})

router.patch('/:id',async(req,res)=>{
    try{
       
        var updatedata = await products.updateOne({_id:req.params.id},
       {
            $set :{
                name:req.body.name,
                category : req.body.category,
                description : req.body.description,
                price : req.body.price,
                imageUrl : req.body.imageUrl,
                qty : req.body.qty 


            }
       })
       res.json(updatedata);
    }
    catch(err){
        res.json({message:err})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        var dat = await products.findById(req.params.id) 
        res.json(dat)
    }
    catch(err){
        res.json({message:err})
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        var deletedata = await products.remove({_id:req.params.id});
        res.json(deletedata);
    }
    catch(err){
        res.json({message:err});
    }
})
module.exports = router