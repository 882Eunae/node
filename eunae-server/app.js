//app.js 
require('dotenv').config({path: './mapper/dbConfig.env'})
console.log(process.env);

const express=require('express'); 
const app=express(); 

const empRouter=require('./router/employees_router.js');


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(7002,()=>{
  console.log('Server Start'); 
  console.log('http://localhost:7002'); 
}); 

// 라우팅 //  
app.get('/',(req,res)=>{
  res.send('Welcome eunaeServer !!');
}) 


app.use('/',empRouter);