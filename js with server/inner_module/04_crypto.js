//inner_module/04_crypto.js 
const crypto=require('crypto'); //모듈에서 cryto 가져옴 
const data='pw1234';
let secret ='adsfsfdssfdsfsfsdfsfsdfdsfsdf';
//비밀번호 암호화 시키는법 
let encData
    =crypto.createHmac('sha512',secret) //알고리즘 
           .update(data)   //업데이트 
           .digest('base64');  //64bit로 출력
console.log(encData);
