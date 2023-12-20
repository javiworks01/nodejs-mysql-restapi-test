import express from 'express';
import cors from 'cors';
const app = express();


const port = 3000;

import indexRoutes from './routes/index.routes.js';
import employeesRoutes from './routes/employees.routes.js';


// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// endpoints

// index routes
app.use(indexRoutes);

// employees routes
app.use('/api/v1/',employeesRoutes);









app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});