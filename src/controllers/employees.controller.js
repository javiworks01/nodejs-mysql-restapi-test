

export const getEmployees = (req, res) => {
    
    res.status(200).send('Obteniendo empleados');

};


export const getEmployeeById = (req, res) => {
    
    res.status(200).send('Obteniendo empleado');

};


export const createEmployee = (req, res) => {
    
    res.status(200).send('Creando el empleado');

};


export const updateEmployee = (req, res) => {
    
    res.status(200).send('Actualizando empleado');

};


export const deleteEmployee = (req, res) => {
    
    res.status(200).send('Borrando empleado');

};

