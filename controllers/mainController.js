const express = require('express');
const router = express.Router();
const MainModel = require('../models/mainModel');

// Routes
router.get('/', (req, res) => {
  // Controller logic for the home route
  res.render('index');
});

router.get('/about', (req, res) => {
  // Controller logic for the about route
  res.render('about');
});

router.get('/contact', (req, res) => {
  // Controller logic for the contact route
  res.render('contact');
});

router.get('/index', (req, res) => {
  // Controller logic for the index route
  res.render('index');
});

router.get('/login', (req, res) => {
  // Controller logic for the login route
  res.render('login');
});

router.get('/register', (req, res) => {
  // Controller logic for the register route
  res.render('register');
});

module.exports = router;
