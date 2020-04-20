# Tasty Treats code challenge

Create an inquiry form that captures user data and saves the data to text files on the server.

Published to Heroku https://tasty-treats.herokuapp.com/contact/

## Getting started

`npm start` starts server

`npm run devstart` starts the server running on nodemon

`npm run serverstart` starts the server running on nodemon with DEBUG set

`npm run herokudeploy` deploys to Heroku

## Extra credit

- ~~Validate email addresses and prevent~~
- Create a page where Terence can view the inquiries with the newest showing first
- Prevent the form being spammed by bots

## Considerations

I'd do the validation on the client side so it validates without the page reloading, would be a better user experience
