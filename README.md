# Cypress Automation Script for BlazeDemo.com

This is a sample Cypress automation script to book a flight from the BlazeDemo.com website, using page object models and tests.

## Prerequisites
- Node.js and npm installed on your machine
- Chrome or Firefox browser installed on your machine

## Getting Started
To get started, clone the repository and install the dependencies:

``` javascript
git clone https://github.com/remonagayby/cypress-automation-blazedemo.git
cd cypress-automation-blazedemo
npm install
```

## Running the Tests
To run the tests, use the following command:

``` javascript
npm run test
```

This will launch the Cypress Test Runner in interactive mode, where you can select which tests to run and see the test results in real time.

Alternatively, you can run the tests headlessly using the following command:

``` javascript
npm run test:headless
```

This will run the tests in the command line without launching the Test Runner.

## Page Object Models
The page object models for the BlazeDemo.com website are located in the cypress/page-objects directory. There are four page object models:

- **HomePage.cy.js**: This page object model represents the home page of the BlazeDemo.com website. It contains methods for navigating to the home page and selecting a departure and destination city.
- **ReservationPage.cy.js**: This page object model represents the reservation page of the BlazeDemo.com website. It contains methods for selecting the lowest-priced flight in the results and making assertions on the departure and destination cities selected on the home page. 
- **PurchasePage.cy.js**: This page object model represents the purchase page of the BlazeDemo.com website. It contains methods for entering the passenger and payment details and making a purchase.
- **ConfirmationPage.cy.js**: This is a page object model for the confirmation page of the BlazeDemo.com website. It contains methods for verifying that the booking confirmation details are displayed correctly on the page, such as the flight details, and total price. This page object model can be used in conjunction with tests to ensure that the booking confirmation process is functioning correctly and that the user receives accurate information about their booking.

## Tests
The tests for the BlazeDemo.com website are located in the cypress/integration directory. There are four tests:

- **flightDestination.cy.js**: This test verifies that the user can select a departure and destination city on the home page and navigate to the purchase page.
- **flightReservation.cy.js**: This test verifies that the user can select the lowest value flight.
- **flightPurchase.cy.js**: This test verifies that the user can enter the passenger and payment details on the purchase page and make a purchase.
- **flightConfirmation.cy.js**: This test verifies that the data entered by the user on the purchase page is correct and that the lowest-priced flight with the specified airline service is selected.

## Contributing
If you find any issues or have any suggestions for improvement, feel free to submit a pull request or open an issue.
