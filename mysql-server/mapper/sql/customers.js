// mapper/sql/customers.js 
//Table :customers; 

const selectAll=
`SELECT id,name,email,phone,address FROM CUSTOMERS`;  
const selectById= `SELECT id,name,email,phone,address FROM CUSTOMERS where id = ?`;
const insertInfo=
`INSERT INTO customers(name,email,phone,address)
VALUES(?,?,?,?)`;  //배열 
//{name:'H', address:'daegu'} 
//SET name='H' , address ='daegu'
const updateInfo=
`UPDATE customers 
SET ?
WHERE id = ?`; //배열 [객체, 단일값 ]  

const deleteById=
`DELETE from customers 
WHERE id= ?`;


module.exports={
  // 'selectAll' : selectAll 
  selectAll,
  selectById, 
  deleteById,  
  insertInfo,
  updateInfo,
}