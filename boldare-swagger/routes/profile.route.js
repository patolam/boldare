const express = require('express');
const router = express.Router();

const profile_controller = require('../controllers/profile.controller');

router.get('/', profile_controller.profile_load);
router.post('/comment', profile_controller.profile_comment);

module.exports = router;
