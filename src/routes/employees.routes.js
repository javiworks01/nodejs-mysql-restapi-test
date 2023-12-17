import { Router } from 'express';

const router = Router();


// get employees
router.get('/employees', (req, res) => {
    
    res.status(200).send('Obteniendo empleados');

});

// get employee by id
router.get('/employees/:id', (req, res) => {
    
    res.status(200).send('Obteniendo empleado');

});


// create employee
router.post('/employees', (req, res) => {
    
    res.status(200).send('Creando el empleado');

});

// update employee
router.put('/employees/:id', (req, res) => {
    
    res.status(200).send('Actualizando empleado');

});

// delete employee
router.delete('/employees/:id', (req, res) => {
    
    res.status(200).send('Borrando empleado');

});

export default router;

