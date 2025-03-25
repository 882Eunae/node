
//js with server/06-01_module.js
function print(keyword){
  console.log(keyword); 
}
function plus(x,y){
  return x+y;
}

module.exports= {
 //외부에 노출할 대상을 설정  
 print,
}