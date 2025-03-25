//js with server/05_spread_operator.js 
let a=[1,3,5] ;

let b=[10,20]; 



let newList=[...b,...a];

console.log(newList);

newList=[b,a] ;
console.log(newList); 

let str="CD"; 
let strAry=[...str];
console.log(str[0]); 
console.log(strAry);

let obj = {
  id : 100,
  name : 'Hong',
  birth : '1999-12-25'
  }
  let {id, name, birth} = obj;
  console.log(id);

  