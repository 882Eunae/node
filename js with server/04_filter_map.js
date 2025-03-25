//js with server/04_filter_map.js 
let persons=[
{
  name:"유재석",
  point:78,
  city:"서울"
},
{
  name:"김종국",
  point:92,
  city:"서울"
},
{
  name:"양세찬",
  point:76,
  city:"제주"
},
{
  name:"하하",
  point:81,
  city:"대구"
}];

//1)점수가 80점 이상인 사람들만 따로  
let scores
  =persons.filter(function(value,index){
    return value.point>80; //boolean 타입 
 })
console.log(scores);
//ps ) 객체배열일 경우 새로운 배열과 원본배열 둘다 데이터 변경 발생 
//filter를 기반으로 배열만들면 값변경이 가능 즉 원본까지 영향을 받음 
scores[0].name="강호동"; 
console.log(scores); 
console.log(persons); 

//2) 각 사람들별로 no를추가 
//=>map 
let newList
=persons.map(function(value,index){
  return{
    no:((index+1)*100),
    name:value.name,
    city:value.city
  }
});
console.log(newList);
//PS
newList[0].name="홍길동"; 
console.log(newList);
console.log(persons); //map은 서로 연결을 끊어냄.

let a=[1,3,5] ;

let b=[10,20]; 

let neww=[...b,...a]; 
console.log(neww);