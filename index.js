import express from 'express';
const app = express();

const port = 3000;

// importamos la conexion a mysql
import { pool } from './db.js';


// endpoints

app.get('/ping', async (req, res) => {

    const [result] = await pool.query('SELECT 1 + 1 AS result'); 
    res.json(result[0]);

});


// get employees
app.get('/employees', (req, res) => {
    
    res.status(200).send('Obteniendo empleados');

});

// get employee by id
app.get('/employees/:id', (req, res) => {
    
    res.status(200).send('Obteniendo empleado');

});


// create employee
app.post('/employees', (req, res) => {
    
    res.status(200).send('Creando el empleado');

});

// update employee
app.put('/employees/:id', (req, res) => {
    
    res.status(200).send('Actualizando empleado');

});

// delete employee
app.delete('/employees/:id', (req, res) => {
    
    res.status(200).send('Borrando empleado');

});





app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});