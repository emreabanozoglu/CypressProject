# Cypress Project

## Introduction
* In this project I created 3 test scenarios for testing the sause lab demo web site.

* Used the Page Object Model design pattern. So every pages have own page classes and we can find the page methods in that classes.

* Created a custom command for picking the random items from the items list. You can find it in cypress/support/commands.js

* With "Add To Card An Item And Checkout Successfully" test scenario we are testing end-to-end main features of the website. Steps are;

  * Login with the standart user,
  * Picking one of random item from list,
  * Opening the detail page and verifying the item name,
  * Adding to card and verifying the shopping card badge number,
  * Going to shopping card page and verifying the prices are exactly same with detail page.
  * Continue to the information page and filling the first, last name and zip code areas.
  * Then after that page we are gonna confirm the prices also same with the confirming page.
  * And the final page confirming the checkout is success.

* With "Try to login with locked user" and "Try to login with wrong username and password" text scenarios we are achiving;

  * When the user try to login with the locked user or wrong username and password, they will see the error message on the screen and the login is not success.

## Requirements
* node.js should be installed in the instance

## Execute Test Cases
* Use this cli command for the headless execution;
    `npx cypress run`
* or for the debug mode you can use this command;
    `npx cypress open`

## GitHub Actions
* CI configuration added for the project. After each commit the CI pipeline gonna run and our test cases will be executed. We can also trigger by manually in the GitHub Actions section.

## Author
* Emre Abanozoğlu