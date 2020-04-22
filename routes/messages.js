const express = require('express');
const router = express.Router();
const connectDB = require('../handlers/handleDbConnection');

// I would make some kind of function to loop over the /routes folder to dynamically create this
const nav = {
  'Home': '/',
  'Bread': '/',
  'Cakes': '/',
  'Contact': '/contact'
}

router.get('/', (req, res) => {
  connectDB(async db => {
    // The toArray method returns an array of documents
    // https://docs.mongodb.com/manual/reference/method/cursor.toArray/
    const messagesInfo = await db.collection('messages').find({}).toArray();
    
      res.status(200).render('messages', {
        title: 'Messages',
        nav,
        numberOfMessages: messagesInfo.length,
        // As messages are stored in order of submission reversing the array should work
        messages: messagesInfo.reverse()
      })
  });
});

module.exports = router;
