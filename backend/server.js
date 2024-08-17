const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

var cors = require('cors')


dotenv.config();
connectDB();

const app = express();

app.use(cors())


app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
