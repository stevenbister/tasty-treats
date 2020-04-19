const express = require('express');
const router = express.Router();

// I would make some kind of function to loop over the /routes folder to dynamically create this
const nav = {
  'Home': '/',
  'Bread': '/',
  'Cakes': '/',
  'Contact': '/contact'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Tasty Treats', 
    nav 
  });
});

module.exports = router;
