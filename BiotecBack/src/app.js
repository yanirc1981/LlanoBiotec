// src/app.js
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { JWT_SECRET_KEY } = require('./config/envs');
const authRoutes = require('./routes/authRouter');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRoutes);
app.use('/', protectedRoutes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from front
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('*', (req, res) => {
  res.status(404).send({
    error: true,
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = app;
