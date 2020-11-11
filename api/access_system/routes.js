const express = require('express');

const router = express.Router();
const ctr = require('./controller');

router.get('/', ctr.renderLogin);

router.post('/signin', ctr.signin);

router.post('/signup', ctr.signup);

module.exports = router;
