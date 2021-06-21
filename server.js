const express=require('express');
const env=require('dotenv');
const app=express();    //  to creat an app using express

env.config();
const POORT=process.env.PORT ||3000;
// enviroment varible 



app.listen(POORT,() =>
{
    console.log(POORT);
});