const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db_connection/db');
const taskRoutes = require('./routes/troutes');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware- used to parse Data into json
app.use(express.json());



// CORS Configuration- allows the data to pass from the localhost:3000(frontend) to localhost:5137(backend)
app.use(cors({
    origin: '*',//process.env.FRONTEND_URL || 'http://localhost:5173' for temporarily it was assigned to "*" 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));



app.use('/api/tasks', taskRoutes);



app.get('/', (req, res) => {
  res.send('The Server is Running fyn kiran..You can test the methods');
});

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
