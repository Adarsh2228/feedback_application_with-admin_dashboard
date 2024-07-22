const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

// Login route
router.post('/login', authController.login);

// Register route
router.post('/register', authController.register);

module.exports = router;
