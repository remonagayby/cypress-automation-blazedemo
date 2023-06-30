import {faker} from '@faker-js/faker';
import ConfirmationPage from './confirmationPage.cy';

class PurchasePage {
    // get the purchase page url
    get purchasePageUrl() {
        return cy.url()
    }

    // get the purchase page header
    get purchasePageHeader() {
        return cy.get('h2')
    }

    // get the purchase page name field
    get nameField() {
        return cy.get('#inputName')
    }

    // get the purchase page address field
    get addressField() {
        return cy.get('[name="address"]')
    }

    // get the purchase page city name field
    get cityField() {
        return cy.get('[name="city"]')
    }

    // get the purchase page state field
    get stateField() {
        return cy.get('[name="state"]')
    }

    // get the purchase page zipCode field
    get zipCodeField() {
        return cy.get('[name="zipCode"]')
    }

    // get the payment card type dropdown list
    get cardTypeList() {
        return cy.get('#cardType')
    }

    // get the credit card number field
    get creditCardNumber() {
        return cy.get('#creditCardNumber')
    }

    // get credit card month field
    get creditCardMonth() {
        return cy.get('#creditCardMonth')
    }

    // get credit card year
    get creditCardYear() {
        return cy.get('#creditCardYear')
    }

    // get name on card field
    get nameOnCard() {
        return cy.get('#nameOnCard')
    }

    // get remember me field
    get rememberMeBox() {
        return cy.get('#rememberMe')
    }

    // get purchase flight field
    get purchaseFlightButton() {
        return cy.get('[value="Purchase Flight"]')

    }

    // type a random name in the name field
    typeName() {
        this.nameField.type(faker.person.fullName())

        return new PurchasePage
    }

    //type a random address in the address field
    typeAddress() {
        this.addressField.type(faker.location.streetAddress())

        return new PurchasePage
    }

    // type a random address in the address field
    typeCity() {
        this.cityField.type(faker.location.city())

        return new PurchasePage
    }

    // type a random state in the state field
    typeState() {
        this.stateField.type(faker.location.state())

        return new PurchasePage
    }

    // type a random state in the state field
    typeZipCode() {
        this.zipCodeField.type(faker.location.zipCode())

        return new PurchasePage
    }

    // select a random payment card type
    randomCardType() {
        this.cardTypeList.then(dropdown => {
            const options = dropdown.find('option');
          
            // Get the number of options in the dropdown
            const numOptions = options.length;
          
            // Generate a random index between 0 and the number of options
            const randomIndex = Math.floor(Math.random() * numOptions);
          
            // Select the option at the random index
            cy.wrap(dropdown).select(options[randomIndex].value);
          })

          return new PurchasePage
    }

    // type a random credit card number
    typeCardNumber() {
        this.creditCardNumber.type(faker.finance.creditCardNumber())

        return new PurchasePage
    }

    // type a random credit card month
    typeCardMonth() {
        this.creditCardMonth.type(faker.date.month)

        return new PurchasePage
    }

    // type a random credit card year
    typeCardMonth() {
        this.creditCardMonth.type(faker.date.month)

        return new PurchasePage
    }

    // type the name on card 
    typeCardName() {
        this.nameOnCard.type('@creditCardName')

        return new PurchasePage
    }



    // assert the page page url
    assertPurchasePageUrl() {
        this.purchasePageUrl.should('eq', 'https://blazedemo.com/purchase.php')

        return new PurchasePage
    }

    // assert the purchase page header
    assertPurchaseageHeader() {
        this.purchasePageHeader.should('contain', 'Your flight from').and('contain', 'has been reserved.')

        return new PurchasePage
    }

    // assert the departure and destination city names in the header
    assertCityNames() {
        this.purchasePageHeader
        .then($h2 => {
            const [fromCity, toCity] = $h2.text().replace('Flights from ', '').replace(': ', '').split(' to ')
            
            // Assert that the fromCity and toCity are correct
            cy.get('@departureCityName').should('contain', fromCity)
            cy.get('@destinationCityName').should('contain', toCity)
        })

        return new PurchasePage
    }

    // check on remember me checkbox
    checkRememberMe() {
        this.rememberMeBox.check()

        return new PurchasePage
    }

    // click on purchase flight button
    clickPurchaseFlight() {
        this.purchaseFlightButton.click()

        return new ConfirmationPage
    }
}

export default PurchasePage