/* eslint-disable no-console */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDB from './config/db.js';

import indexRouter from './routes/index.js';
import testAPIRouter from './routes/testAPI.js';
import testDBRouter from './routes/testDB.js';
import topicsRouter from './routes/topics.js';
import usersRouter from './routes/users.js';

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 3400;

// __filename equivalent in ESM
const __filename = new URL(import.meta.url).pathname;

// Get __dirname equivalent
const __dirname = path.dirname(__filename);

// Middleware to Log Incoming Requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
});

const allowedOrigins = [process.env.CORS_ORIGIN, 'http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use (express.json({ type: 'application/json' }));

app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/testDB', testDBRouter);
app.use('/topics/:model', topicsRouter);
app.use('/topics', topicsRouter);
app.use('/', indexRouter);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});
