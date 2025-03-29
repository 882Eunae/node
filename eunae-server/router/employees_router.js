const express=require('express'); 
const router=express.Router(); 
const empService=require('../service/employees_service'); 

//전체조회 
router.get('/employees',async(req,res)=>{
    let empList=await empService.findAll();
    res.send(empList);
});
//삭제
router.delete('employees/:id',async (req,res)=>{
    let empId=req.params.id;
    let result=await empService.removeEmpInfo(empId); 
    res.send(result);
});


module.exports=router;