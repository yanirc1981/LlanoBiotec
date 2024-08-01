// src/routes/authRoutes.js
const { Router } = require('express');
const { createUser, auth } = require('../controllers');

const router = Router();

router.post('/signup', (req, res, next) => {
  console.log('Received request at /signup'); // Log para verificar la llegada de la solicitud
  next();
}, createUser);

router.post('/login', (req, res, next) => {
  console.log('Received request at /login'); // Log para verificar la llegada de la solicitud
  next();
}, auth);

module.exports = router;


