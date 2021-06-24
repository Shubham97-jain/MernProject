const express=require('express');
const env=require('dotenv');
const mongoose = require('mongoose'); 
// import routes
const useroutes=require('../src/routers/user');
const app=express();    //  to creat an app using express

env.config();



// mongodb connection
//mongodb+srv://admin:<password>@cluster0.efyft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://admin:root@cluster0.efyft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex:true
}
  ).then(()=>{

    console.log("Connected");
  });

// enviroment varible 
const POORT=process.env.PORT ||3000;

//app.use(express.static('public')); 
// using middle ware for handling the request
app.use(express.json());

app.use('/api',useroutes)


// get requst
// app.get('/',(req,res,next)=>{
//     res.sendStatus(2000).json({
//       'success': false,
//       'result': 'forbidden'
//     })

// });


// // post request
// app.post('/data',(req,res,next)=>{
//     res.status(200).json({
//       firstname:req.body.firstname,
//       lastname:req.body.lastname
//     })
// });


//  Adding port number
app.listen(POORT,() =>
{
    console.log('Server is running at',POORT);
});