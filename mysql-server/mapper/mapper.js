// mapper/mapper.js 
const mariaDB = require('mariadb/callback');
const sqlList=require('./sql/customers.js');

const connectionPool = mariaDB.createPool({
  //필수 
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
  //선택
  permitSetMultiParamEntries: true,
  insertIdAsNumber: true,
  bigIntAsNumber: true,
});


const query = (alias, values) =>{
  return new Promise((resove,reject)=>{
    let executeSql=sqlList[alias];
    console.log(`sql:${executeSql}`);
    connectionPool.query(executeSql,values,(err,result)=>{
      if(err){
        reject({err}); 
      }else{
        resove(result);
      }
    });

  })
  .catch(err =>{
    console.log(err); 
    return err;
  });
}

module.exports = {
  query,
}