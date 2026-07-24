const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/index');
const connectDB = require('./config/db.config');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://su-youth-camp.netlify.app'
}));

dotenv.config();
const port = process.env.PORT;

connectDB();

app.use('/api', authRoutes);
app.listen(port, () => {
    console.log(`App is currently running at http://localhost:${port}`)
});