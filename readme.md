# Tasty Treats code challenge

Create an inquiry form that captures user data and saves the data to text files on the server.

Published to Heroku https://tasty-treats-app.herokuapp.com/contact.

## Dependencies

- [Mongodb](https://www.mongodb.com/)

## Getting started

`npm start` starts server

`npm run devstart` starts the server running on nodemon

`npm run serverstart` starts the server running on nodemon with DEBUG set

## Extra credit

- Validate email addresses and prevent
  - Server side validation using express validator
- Create a page where Terence can view the inquiries with the newest showing first
  - Messages are saved to a Mongodb database and displayed here https://tasty-treats-app.herokuapp.com/contact
- Prevent the form being spammed by bots
  - Attempted to implement a reCaptcha, however was unable to get it working correctly before submitting so didn't commit it

## If I could do it again...

I could probably get away without using the express-generator as it looks like I've got a few packages I'm not using but, as one of my first Node projects, I think it has helped with a lot of boilerpate code.

I'd do the form validation on the client side or through an AJAX request so it validates without the page reloading. I feel like this would be a better user experience.

I'd give myself more time to implement the spam protection part of the challenge, I misjudged how long it would take me to get my head around the rest of it.
