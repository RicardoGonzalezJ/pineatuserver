const express = require('express');

const router = express.Router();
const ctr = require('./controller');

router.get('/', ctr.renderLogin);

router.post('/', ctr.signin);

router.post('/', ctr.signup);

module.exports = router;
