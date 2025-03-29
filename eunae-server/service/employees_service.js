const mariaDB=require('../mapper/mapper.js');
const findAll=async() =>{
    let list=await mariaDB.empQuery('findAll');
    return list;    
}

const removeEmpInfo=async (empId) =>{
    let result=await mariaDB.empQuery('deleteById',empId);
    return result;
};


module.exports={
    findAll,
    removeEmpInfo, 
}