// inner_module/05_fs.js 
const fs=require('fs'); 
const data='Hello, World!!'; 

fs.writeFile('./sample.txt',
     data,
  'latin1', //인코딩 기준 영어만 가능 
  (err)=>{ 
    if(err){
      throw err;
    }
    console.log('파일쓰기 완료 !');
});

//result는 파일에서 읽어들인 데이터
fs.readFile('./sample.txt','utf-8',(err,result)=>{
  if(err) throw err; 
  console.log(result);
}); 
