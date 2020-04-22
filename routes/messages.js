const express = require('express');
const router = express.Router();

// Connect to mongodb
const { MongoClient } = require('mongodb');


// I would make some kind of function to loop over the /routes folder to dynamically create this
const nav = {
  'Home': '/',
  'Bread': '/',
  'Cakes': '/',
  'Contact': '/contact'
}

router.get('/', async (req, res) => {

  // Connect to mongodb
  const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true,   useUnifiedTopology: true });
  const db = client.db('tasty-treats-db');

  const messagesInfo = await db.collection('messages').find({}).toArray();
// TODO: Display messages most recent first
  res.render('messages', {
    title: 'Messages',
    nav,
    numberOfMessages: messagesInfo.length,
    messages: messagesInfo
  })

});

module.exports = router;
