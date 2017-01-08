# General Election Polling Application

[![Build Status](https://travis-ci.org/tomeightyeight/election-polling.svg?branch=master)](https://travis-ci.org/tomeightyeight/general-election-polling) [![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/tomeightyeight/general-election-polling/badges/quality-score.png)](https://scrutinizer-ci.com/g/tomeightyeight/general-election-polling/)

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

2. Build SPA JavaScript bundles and CSS by installing and running Grunt (npm install - package.json included).

3. Ensure that the following file exists and is writable: ./log/error.log (this is not included in the repositoy due to the .gitignore).

4. Please configure the ./src/config.ini for your environment (I reccomend setting DEBUG to false for production).

## General Notes

Although some unit testing has been done and the API is complete I've skipped out functional testing of the API which would usually be performed using the Symfony WebTestCase class to test all the endpoints: 
http://symfony.com/doc/current/book/testing.html#functional-tests

The following feature has not yet been fully implemented due to time constraints:
Results Filter

Things to note about the voting feature: 

- Feedback from API (e.g. with problem committing to database / if a user voted). 
- Dynamically populates potential candidates based on constituency selected.
- Client side validation

## Copyright and Licence
This application has been written by Tom Humphris and is released under the MIT License.
