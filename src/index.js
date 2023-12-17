import express from 'express';
const app = express();

const port = 3000;

import indexRoutes from './routes/employees.routes.js';
import employeesRoutes from './routes/employees.routes.js';


// endpoints

// index routes
app.use(indexRoutes);

// employees routes
app.use(employeesRoutes);









app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});