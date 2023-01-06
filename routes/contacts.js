const express = require('express');
const router = express.Router();

const contact = require('../controller/contactController.js');

router.get('/', contact.getDB);

router.get('/:id', contact.getContact);

module.exports = router;