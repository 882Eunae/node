//js with server/08_promise.js 
let timeAsync=new Promise((resolve,reject)=>{
  //비동기 작업 등록 
  let result=false;
  setTimeout(()=>{
    result=true;
    console.log('비동기 작업수행'); 
    if(result){
      resolve('result : 성공'); 
    }else{
      reject(new Error('result : 실패'));
    }
  },3000); 
});

console.log(timeAsync);
console.log('작업종료');

timeAsync
.then((success)=>{
  console.log(success);
  return '첫번째 작업 완료'; 
},(fail)=>{
  console.log(fail) 
})
.then((success)=>{
  console.log(success);
  throw new Error('후속 처리중 에러발생');
})
.catch(console.log);
console.log('작업종료');

