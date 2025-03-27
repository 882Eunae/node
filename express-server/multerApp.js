
const multer=require('multer'); //multer 객체? 만들기 
const path=require('path'); 
const cors=require('cors');

const express=require('express'); 
const app=express();
app.use(cors());  // 

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads/'); //서버에 저장 장소 설정 
  },
  filename:function(req,file,cb){
    let savedFile=(new Date()).valueOf()+path.basename(file.originalname); 
    cb(null,savedFile);  //filename 지정 오늘날짜 밀리 세컨초로 중복이안됨
  }
});

const upload=multer({storage:storage}); 

app.listen(5000,()=>{
  console.log('Server start!!'); 
  console.log('http://localhost:5000'); 
}); 

//avatar 라는 키를 받음 
app.post('/profile',upload.single('avatar'),(req,res)=>{
  console.log(req.file); 
  console.log(req.body); 
}); 
//any: 다 읽어들이는거 array: 제한을 걸어버림 
//여러개
app.post('/photos',upload.array('photos',8),(req,res)=>{
  for(let file of req.files){
    console.log(file);
  }
})