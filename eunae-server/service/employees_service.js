const mariaDB=require('../mapper/mapper.js');
const findAll=async() =>{
    let list=await mariaDB.empQuery('findAll');
    return list;    
}

const removeEmpInfo=async (empId) =>{
    let result=await mariaDB.empQuery('deleteById',empId);
    return result;
};

const findById= async(empId) =>{
    let list=await mariaDB.empQuery('selectById',empId); 
    return list;
}; 

const addEmp=async (empInfo) =>{
   let columnlist=['first_name','last_name','email','gender','ip_address'];
    let addEmp=converterAray(empInfo,columnlist); 
    let result=await mariaDB.empQuery('insertInfo',addEmp);
    return result;
}; 

const converterAray=(target,list) =>{
    let aray=[]; 
    for(let field of list){
        let val=target[field];
        aray.push(val);
    }
    return aray;
}
//수정 
const updateEmp=async (empInfo,empId) =>{
    let updateEmp=[empInfo,empId]; //[객체,아이디]
    let result=await mariaDB.empQuery('updateEmp',updateEmp);    
    return result;
}

module.exports={
    findAll,
    removeEmpInfo, 
    findById,
    addEmp,
    updateEmp,
}