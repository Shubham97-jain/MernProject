const express=require('express');
const User=require('../model(Databse)/user');
const router=express.Router();


router.post('/sign',(req,res)=>{


});

router.post('/signup',(req,res)=>{

    User.findOne({email:req.body.email})
    .exec((error,user) =>{
        if(user)
        return res.status(404).json({
            message:'User already registered'
        });

         const {
             firstname,
             lastname,
             email,
             password
            }=req.body;
        const _user=new User({firstname,
            lastname,
            email,
            password,
            username:Math.random().toString()
        });
        _user.save((error,data)=> {
            if(error){
                return res.status(400).json({
                    message:'Somthing went wrong'

                });
            }
            if(data)
            {
                return res.status(201).json({
                    //user:data   //  to get in resp
                    message :"user created sucessfully"
                })
            }

        });

        
    });


});

module.exports=router;