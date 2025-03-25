// js with server/02_declare_fun.js 

// 1)함수 선언문 => var ,가장 밑에 있는것
/*함수호이스팅 
var plus=function(x,y,z){
return (x+y+z); 
}
*/ 
let result=plus(1,2,3);
console.log(result); 


function plus(x,y){
  return (x+y); 
}

function plus(x,y,z){
  return (x+y+z); 
}

// 2)함수표현식 => let, const 방식 ,함수(function)는 밑에 함수표현식(let,const)은 위에 ;; 
const printMsg=function(keyword){
  return "result : +" +keyword; 
}
//3)화살표 함수: ()=>{}   원칙적으로 이름을 가질수없음
//3-1)익명함수 
let array=[1,2,3,4,5]; 
array.forEach(val =>console.log(val)); //가장대표적인 화살표함수 

const highFun=function(num){
  return (x) =>{
    return x+num;
  }
}
//고차함수
const addNum=highFun(10);
/* (x) =>{
    return x+10;
  }
 */

result=addNum(5);
console.log(result); 
//3-2)화살표 함수 + 함수표현식 
const multi=(x,y) => x*y;
console.log(multi(2,4));