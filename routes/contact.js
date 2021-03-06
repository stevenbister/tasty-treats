const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path');
const { check, validationResult } = require('express-validator');
const handleDateFormat = require('../handlers/handleDateFormat');

// Connect to mongodb
const connectDB = require('../handlers/handleDbConnection');

// Get the messages folder, we'll save text files here later
const messagesFilePath = path.join(appRoot.path, 'messages');

// I would make some kind of function to loop over the /routes folder to dynamically create this
const nav = {
  'Home': '/',
  'Bread': '/',
  'Cakes': '/',
  'Contact': '/contact'
}

// GET contact form
router.get('/', (req, res) => {
  res.render('contact', { 
    title: 'Contact',
    nav,
    image: '../images/theme-photos-Hx7xdwhj2AY-unsplash.jpg',
    date: new Date(),
    data: {},
    errors: {}
  });
});

// POST to contact form
router.post('/', [
  // Validate form & sanitize the inputs so they're consistent
  check('name')
    .isLength({min: 1})
    .withMessage('Name is required')
    .trim(),
  check('email')
    .isEmail()
    .withMessage('Email needs to be a vaild email address')
    .bail() // stops vaildators early if previous ones have failed
    .trim()
    .normalizeEmail(),
  check('message')
    .isLength({min: 1})
    .withMessage('Message is required')
    .trim()
  ], (req, res) => {
    const data = req.body;
    const errors = validationResult(req);

   if(!errors.isEmpty()) {
     return res.render('contact', {
       title: 'Contact',
       nav,
       image: '../images/theme-photos-Hx7xdwhj2AY-unsplash.jpg',
       data,
       errors: errors.mapped()
     });
   }

    // Push message to database
    connectDB(async db => {
      db.collection('messages').insertOne(data);
    });

    // Check if there are errors and write to file
    if (errors.errors.length === 0) {
      fs.writeFile(`${messagesFilePath}/${handleDateFormat}.txt`, JSON.stringify(data), (err) => {
        if (err) return console.log(err);

        console.log('Mesage saved to server');
      })

      res.redirect('/success');
    }

});

module.exports = router;
