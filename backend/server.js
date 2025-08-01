const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from /public as /assets
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
