//express-server/app.js 
const express=require('express'); 
const app=express(); 

app.listen(5000,()=>{
    console.log('Serverconnect'); 
    console.log('http://localhost:5000');
}); 

//라우팅? 작성 REST API 기반
// 전체조회 : GET + '/emps' 
app.get('/emps');

// 등록 : POST +'/emps'
app.post(); 

//수정 : PUT +'/emps/100'   
app.put(); 

//삭제:DELETE +'/emps/100'
app.delete();