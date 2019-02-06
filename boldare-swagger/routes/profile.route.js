const express = require('express');
const router = express.Router();

const profile_controller = require('../controllers/profile.controller');
const auth = require('../controllers/auth');

router.get('/', auth.required, profile_controller.profile_load);
router.post('/comment', auth.required, profile_controller.profile_comment);

module.exports = router;
