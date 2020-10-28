const express = require('express');

const router = express.Router();
const ctr = require('./controller');
const acsys = require('../login/model');

router.get('/', acsys.isAuthenticated, ctr.listOfUsers);

module.exports = router;
