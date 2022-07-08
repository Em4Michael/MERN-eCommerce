import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import { notFound, errorHandler } from '../middleware/errorMiddleware.js';

//import products from './data/products.js';
import colors from 'colors'

//import { useParams } from 'react-router-dom';


//62bb219092d280cad2ab0851

dotenv.config()
connectDB()
const app = express();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.2ryarbp.mongodb.net/?retryWrites=true&w=majority
app.get('/', (req, res) => {
  res.send('API has started...')
})

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.use('/api/emp', employeeRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

