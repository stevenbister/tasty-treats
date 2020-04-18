const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path');
const {check, validationResult, matchedData} = require('express-validator');
const handleDateFormat = require('../handlers/handleDateFormat');

// GET contact form
router.get('/', (req, res) => {
  res.render('contact', { 
    title: 'Contact',
    data: {},
    error: {}
  });
});

// POST to contact form
router.post('/', [
  // Validate form
    check('name').isLength({min: 1}).withMessage('Name is required')
  ], 
  (req, res) => {
    const errors = validationResult(req);
    const messagesFilePath = path.join(appRoot.path, 'messages');
    
    // Check if there are errors and write to file
    if (errors.errors.length === 0) {
      fs.writeFile(`${messagesFilePath}/${handleDateFormat}.txt`, JSON.stringify(req.body), (err) => {
        if(err) console.log(err);
    
        console.log('Mesage saved!');
      })
    }

    res.render('contact', {
      title: 'Contact',
      data: req.body,
      errors: errors.mapped()
    });
});

module.exports = router;
