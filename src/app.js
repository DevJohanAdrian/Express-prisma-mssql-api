import express from "express";
import cors from 'cors';
import productsRoutes from './routes/products.route.js';
import categoryRoutes from './routes/category.route.js';

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use(productsRoutes);
app.use(categoryRoutes);

export default app;

