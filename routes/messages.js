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
    const messagesInfo = await db.collection('messages').find({}).toArray();
    
    // TODO: Display messages most recent first
      res.status(200).render('messages', {
        title: 'Messages',
        nav,
        numberOfMessages: messagesInfo.length,
        messages: messagesInfo
      })
  });


});

module.exports = router;
