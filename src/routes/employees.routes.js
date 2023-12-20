import { Router } from 'express';
import { 
    getEmployees,
    createEmployee, 
    updateEmployee,
    deleteEmployee,
    getEmployeeById

} from '../controllers/employees.controller.js';


const router = Router();


// get employees
router.get('/employees', getEmployees);


// get employee by id
router.get('/employees/:id', getEmployeeById);


// create employee
router.post('/employees', createEmployee);

// update employee
router.patch('/employees/:id', updateEmployee);

// delete employee
router.delete('/employees/:id', deleteEmployee);

export default router;

