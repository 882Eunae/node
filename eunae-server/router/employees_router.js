const express=require('express'); 
const router=express.Router(); 
const empService=require('../service/employees_service'); 

//전체조회 
router.get('/employees',async(req,res)=>{
    let empList=await empService.findAll();
    res.send(empList);
});
//삭제
router.delete('/employees/:id',async (req,res)=>{
    let empId=req.params.id;
    let result=await empService.removeEmpInfo(empId); 
    res.send(result);
});

//단건조회 
router.get('/employees/:id',async (req,res)=>{
    let empId=req.params.id; 
    let empInfo=await empService.findById(empId); 
    res.send(empInfo);
});
//등록 
router.post('/employees',async(req,res)=>{
    let addEmp=req.body; 
    let result=await empService.addEmp(addEmp); 
    res.send(result);
}); 
//수정 
router.put('/employees/:id',async(req,res)=>{
    let empId=req.params.id; 
    let updateEmp=req.body; 
    let result=await empService.updateEmp(updateEmp,empId);
    res.send(result);
})


module.exports=router;