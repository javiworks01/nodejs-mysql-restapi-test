import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config.js';
const app = express();



import indexRoutes from './routes/index.routes.js';
import employeesRoutes from './routes/employees.routes.js';



// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// endpoints

// index routes
app.use(indexRoutes);

// employees routes
app.use('/api/v1/',employeesRoutes);



// not found routes
app.use((req, res, next) => {
    res.status(404).json({ message: `Not found request: ${req.url}` });
});

// global error handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something broke!', err, stack: err.stack })
});

export default app;
