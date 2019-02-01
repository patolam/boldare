const express = require('express');
const router = express.Router();

const auth_controller = require('../controllers/auth.controller');

router.post('/sign', auth_controller.auth_save);
router.post('/login', auth_controller.auth_login);

module.exports = router;
