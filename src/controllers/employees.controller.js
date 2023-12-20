import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    
    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        res.status(200).json({success: true, data: rows || []});
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something goes wrong", error , stack: error.stack});
    }

};


export const getEmployeeById = async (req, res) => {

    const {id} = req.params;
    try {

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        
        if (rows.length <= 0) {
            return res.status(404).json({ success: false, message: 'Employee not found' , data: []});
        }

        res.status(200).json({success: true, data: rows[0] });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Something goes wrong", error , stack: error.stack});
    }

};


export const createEmployee = async (req, res) => {
    
    const { name, salary } = req.body;
    try {
        
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
        
        res.status(201).json({success: true, data: { id: rows.insertId, name, salary}});

    } catch (error) {
        return res.status(500).json({ success: false, message: "Something goes wrong", error , stack: error.stack});
    }

};


export const updateEmployee = async (req, res) => {
 
    const {id} = req.params;
    const {name, salary} = req.body;

    try {
 
        const [result] = await pool.query(
            "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
            [name, salary, id]
        );

        if (result.affectedRows <= 0) {
            return res.status(404).json({ success: false, message: 'Employee not found' , data: []});
        }

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        res.status(200).json({success: true, data: rows[0] });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Something goes wrong", error , stack: error.stack});
    }

};


export const deleteEmployee = async (req, res) => {

    const {id} = req.params;
 
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({ success: false, message: 'Employee not found' , data: []});
        }

        res.status(204).json({success: true, affectedRows: result.affectedRows });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Something goes wrong", error , stack: error.stack});
    }

};

