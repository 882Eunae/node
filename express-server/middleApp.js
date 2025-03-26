//middleApp.js 
const express=require('express');
const app=express(); 

//미들웨어 등록  
const session=require('express-session'); 
const cors=require('cors'); 

let sessionSetting=session({
  secret:'ffjkshfskdahfswerbwehjrwebj',
  resave:false,
  saveUninitialized:true,
  cookie:{
    httpOnly:true, //서버만 접속가능하게 ,자바스크립트로 접근할수 없음 
    secure:false,
    maxAge:60000  
  }
});
app.use(sessionSetting); //서버에 등록 
app.use(express.json()); //json 데이터 타입으로 값을 받아옴 
//CORS설정 
//1)모든 origin과 모든요청에 응답 
//app.use(cors()); 

// 2) 지정한 요청에 대해서만 응답 
const corsOption={
  origin:'http://192.168.0.41:5500',
  optionSuccessStatus:200,
}

app.listen(3000,()=>{
  console.log('http://localhost:3000');
});

app.post('/login',(req,res)=>{
  const {id,pwd} =req.body;
  req.session.user=id;
  req.session.pwd=pwd;
  req.session.save(function(err){
    if(err) throw err; 
   // res.redirect('/'); //에러가 없으면 redirect fetch에서 처리할수 없음 
   res.send(req.session);
  })
})

app.get('/',(req,res)=>{
  res.send(req.session.user);
})

app.get('/logout',(req,res)=>{
  req.session.destroy(); //세션정보 없어짐 
  res.redirect('/'); //다시 redirect 
})