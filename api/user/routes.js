const express = require('express');

const router = express.Router();
const ctr = require('./controller');

router.get('/', ctr.listOfUsers);

module.exports = router;
