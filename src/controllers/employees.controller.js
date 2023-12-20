import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    
    const [rows] = await pool.query('SELECT * FROM employee');
    res.status(200).send({success: true, data: rows || []});

};


export const getEmployeeById = (req, res) => {
    
    res.status(200).send('Obteniendo empleado');

};


export const createEmployee = async (req, res) => {
    
    const { name, salary } = req.body;

    if (typeof name !== 'string') {
        throw new Error('Field name must be a string');
    }else  {
        if (!name && name.trim().length === 0) { 
            throw new Error('Field name cannot be empty');
        }
    }
    


    const [rows] = await pool.query('INSERT INTO employee(name, salary) values(?,?)',
        [name, salary]
    );
     
    res.status(201).send({success: true, data: { id: rows.insertId, name, salary}});

};


export const updateEmployee = (req, res) => {
    
    res.status(200).send('Actualizando empleado');

};


export const deleteEmployee = (req, res) => {
    
    res.status(200).send('Borrando empleado');

};

