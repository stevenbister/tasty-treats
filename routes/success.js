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
  res.render('success', { 
    title: 'Thank you', 
    nav,
    image: '../images/taylor-grote-LqkFX2Km1a0-unsplash.jpg',
    message: `You're message has been successfully submitted, we will be in touch soon.`
  });
});

module.exports = router;
