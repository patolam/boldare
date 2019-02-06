const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');
const auth = require('../controllers/auth');

router.get('/', auth.required, user_controller.user_load);
router.put('/like', auth.required, user_controller.user_like);
router.put('/follow', auth.required, user_controller.user_follow);

module.exports = router;
