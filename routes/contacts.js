const express = require('express');
const router = express.Router();

const contact = require('../controller/contactController.js');

router.get('/', contact.getDB);

router.get('/:id', contact.getContact);

router.post('/', contact.createContact);

router.put('/:id', contact.updateContact);

router.delete('/:id', contact.deleteContact);

module.exports = router;