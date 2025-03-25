//inner_module/01_console.js 
const fs=require('fs'); //내장모듈을 불러옴 
const {Console} =require('console');  //

const logOutput=fs.createWriteStream('./logs/stdout.log'); //cr
const errOutput=fs.createWriteStream('./logs/stderr.log');

const logger=new Console({stdout:logOutput,
                          stderr:errOutput});
let count=5; 
logger.log('count :%d',count); 
logger.error(`count : ${++count}`);




