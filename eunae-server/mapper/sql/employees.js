const findAll=
`SELECT id,
		first_name,
        last_name,
        email,
        gender,
        ip_address
        FROM employees`;

const deleteById=
`DELETE FROM employees
WHERE id = ?`; 

const selectById=` SELECT id,
		first_name,
        last_name,
        email,
        gender,
        ip_address
        FROM employees
        WHERE id= ?`;
const insertInfo=` INSERT INTO employees
                    (first_name,
                    last_name,
                    email,
                    gender,
                    ip_address) 
        VALUES(?,?,?,?,?)`

const updateEmp=
`   UPDATE employees
        SET ?
        WHERE id=? `;

module.exports={
    findAll,
    deleteById,
    selectById,
    insertInfo,
    updateEmp,
}