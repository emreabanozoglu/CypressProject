# Cypress Project

## Introduction
* In this project I created 3 test scenarios for testing the sause lab demo web site.

* Used the Page Object Model design pattern. So every pages have own page classes and we can find the page methods in that classes.

* Created a costom command for picking the random items from the items list. You can find it in cypress/support/commands.js

## Requirements
- node.js should be installed in the instance

## Execute Test Cases
Use this cli command for the headless execution;
    `npx cypress run`
or for the debug mode you can use this command;
    `npx cypress open`

## GitHub Actions
CI configuration added for the project. After each commit the CI pipeline gonna run and our test cases will be executed. We can also trigger by manually in the GitHub Actions section.

## Author
Emre Abanozoğlu