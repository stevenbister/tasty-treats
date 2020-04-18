const express = require('express');
const router = express.Router();
const fs = require('fs');
const {check, validationResult, matchedData} = require('express-validator');

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
], (req, res) => {
  const errors = validationResult(req);

  // Write to file
  // TODO: Formate date to nice format
  // TODO: Put files into folder
  if (errors.errors.length === 0) {
    fs.writeFile(`${Date.now()}.txt`, JSON.stringify(req.body), (err) => {
      if(err) console.log(err);
  
      console.log('Saved!');
    })
  }

  res.render('contact', {
    title: 'Contact',
    data: req.body,
    errors: errors.mapped()
  });
});

module.exports = router;
