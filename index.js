import express from 'express';
const app = express();

const port = 3000;


// endpoints

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