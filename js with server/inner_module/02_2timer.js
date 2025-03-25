function showTime(){
  let today=new Date(); 
  console.log('showtime'+today.toLocaleTimeString()); 
}
showTime(); //1
const timeout=setTimeout(()=>{
  let today=new Date();
  showTime(); //3
  console.log('뒤settimeout showtime');//4
  console.log('setTimeout'+today.toLocaleDateString()); //5
},2000); 

let count=0; 
const interval=setInterval(()=>{
  console.log('interval %d',count++); 
  if(count==2){
    clearInterval(interval);
  }
},1000); //2
