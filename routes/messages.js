const express = require('express');
const router = express.Router();

const messagesJson = require('../messages/messages.json');
const { messages } = messagesJson;

// I would make some kind of function to loop over the /routes folder to dynamically create this
const nav = {
  'Home': '/',
  'Bread': '/',
  'Cakes': '/',
  'Contact': '/contact'
}

router.get('/', (req, res) => {
  res.render('messages', {
    title: 'Messages',
    nav,
    numberOfMessages: messages.length,
    messages
  })

});

module.exports = router;
