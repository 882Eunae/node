//js with server/07_parameter.js 
function say(message){
  let msg=(message==undefined?'매개변수가 넘어오지 않았습니다':message); 
  console.log(msg); 
}
say('say->Hello!!'); 
say();

function msg(message='매개변수가 넘어오지 않았습니다'){
  console.log(message); 
}
msg();
msg('msg->Hello !!'); 
//계산기 
const plus=function (x, y, ...args){
  let result = x + y ;
  for(let num of args){
  result += num;
  }
  return result;
  }
  let sum=plus(1,2);
  console.log(sum); 
  console.log(plus(1,2,3,4,5));
  console.log(plus(1,2,3,4,5,6,7,8,9,10));

  


