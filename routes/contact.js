const express = require('express');
const router = express.Router();
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
  res.render('contact', {
    data: req.body,
    errors: errors.mapped()
  });
});

module.exports = router;
