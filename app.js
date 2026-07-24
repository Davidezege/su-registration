const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/index');
const connectDB = require('./config/db.config');

const app = express();
app.use(express.json());

const allowedOrigins = [
  'https://su-youth-camp.netlify.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

dotenv.config();
const port = process.env.PORT;

connectDB();

app.use('/api', authRoutes);
app.listen(port, () => {
    console.log(`App is currently running at http://localhost:${port}`)
});