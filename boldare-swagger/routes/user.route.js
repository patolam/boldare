const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');

router.get('/', user_controller.user_load);
router.put('/like', user_controller.user_like);
router.put('/follow', user_controller.user_follow);

module.exports = router;
