// mapper/sql/customers.js 
//Table :customers; 

const selectAll=
`SELECT ID,NAME,EMAIL,PHONE,ADDRESS FROM CUSTOMERS`; 

module.exports={
  selectAll,
  // 'selectAll' : selectAll 
}