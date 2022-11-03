var express = require ('express')
const app = express ();
var router = express.Router()
var admins = require('../models/Admin')
var mongoose = require('mongoose')

router.get('/',async (req,res,next)=>{
    var data = await admins.find()
    res.json(data)
}) 

router.post('/',async (req,res,next)=>{
    var reqbody = {
        username:req.body.username,
        email : req.body.email,
        password : req.body.password,
        phonenumber: req.body.phonenumber

    }   
    console.log('reqbody' , reqbody)
    const postdata =  new admins(reqbody)
    try {
      let usermodelRes =   await postdata.save()
      res.json({status : 'ok' , data : usermodelRes})
    } catch (error) {
       console.log("error" , error) 
    }

})
router.patch('/:id',async(req,res)=>{
    try{
       
        var updatedata = await admins.updateOne({_id:req.params.id},
       {
            $set :{
                username:req.body.username,
                email : req.body.email,
                password : req.body.password,
                phonenumber: req.body.phonenumber

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
        var dat = await admins.findById(req.params.id) 
        res.json(dat)
    }
    catch(err){
        res.json({message:err})
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        var deletedata = await admins.remove({_id:req.params.id});
        res.json(deletedata);
    }
    catch(err){
        res.json({message:err});
    }
})
module.exports = router