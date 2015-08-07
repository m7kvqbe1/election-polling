# General Election Polling Application

Welcome to the General Election Polling Application documentation. This is a single page application served by a database driven RESTful API.

## Summary of Technologies Used

The application has been built using the following key technologies:

- PHP 5.6
- Silex (see composer.json for list of additional packages)
- Backbone.js
- Handlebars.js
- Underscore.js
- jQuery
- mySQL
- Grunt (for SPA build)
- SASS
- Bootstrap

## Pre-requisites

The application uses Apache and a .htaccess file (included) to URL rewrite all requests (except those to /public) to the application entry point (index.php).

## Installation

Please find included in the archive of this repository a SQL dump of the mySQL database.

1. Please install the relevant project dependencies via Composer (composer install - composer.json included).

2. The latest build of the SPA JavaScript and CSS is included in the ./public directory. You can re-build this by installing Grunt (npm install - package.json included).

3. Ensure that the following file exists and is writable: ./log/error.log (this is not included in the repositoy due to the .gitignore).

4. Please configure the ./src/config.ini for your environment (I reccomend setting DEBUG to false for production).

## General Notes

I've spent about 10 hours on this. I was keen to get this code over to you today so that you have time to review before the weekend. I'm unfortunately away on holiday from next Tuesday evening.

Although some unit testing has been done and the API is complete I have been bad and skipped out functional testing of the API which I would usually perform using the Symfony WebTestCase class to test all the endpoints: 
http://symfony.com/doc/current/book/testing.html#functional-tests

The following feature has not yet been fully implemented due to time constraints:
Results Filter

Things to note about the voting feature: 

- Feedback from API (e.g. with problem committing to database / if a user voted). 
- Dynamically populates potential candidates based on constituency selected.
- Client side validation

## With more time

- If I had more time I would have added DocBlocks as I developed to the API code and really regret not doign this.

- It would have much much higher test coverage.

- I'd be much more careful about filtering input server side.

- The SPA would also have a few niggles resolved like using pushstate instead of the #
