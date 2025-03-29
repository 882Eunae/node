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

module.exports={
    findAll,
    deleteById,

}