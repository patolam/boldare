const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth.controller');
const migration_controller = require('../controllers/migration.controller');

router.post('/', migration_controller.migrate);

module.exports = router;
