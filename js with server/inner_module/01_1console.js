const fs=require('fs'); 
const{Console}=require('console'); 

const logOutput=fs.createWriteStream('./logs/test.log'); 
const errOutput=fs.createWriteStream('./logs/testerr.log'); //파일저장경로

const logger=new Console({stdout:logOutput,
                          stderr:errOutput}); //
logger.log('test.log'); 
logger.error('testerr.log'); 

