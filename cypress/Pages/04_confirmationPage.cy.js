class ConfirmationPage {

    // get confirmation page header
    get pageHeader() {
        return cy.get('h1')
    }

    // get the confirmation page url
    get pagerUrl() {
        return cy.url()
    }

    // get the json data file
    get jsonData() {
        return cy
                .get('pre')
                .invoke('text')
                .then(jsonText => JSON.parse(jsonText))
    }

    // get date
    get date() {
        return cy.get('tbody tr td').eq(13)
    }

    // assert confirmation page header
    assertConfirmationPageHeader() {
        this.pageHeader.should('contain', 'Thank you for your purchase today!')

        return this
    }

    // assert the confirmation page url
    assertConfirmationPageUrl() {
        cy.fixture("data").then(data => {
            this.pagerUrl.should('eq', data.confirmationPageUrl)
        })

        return this
    }

    // assert the flight confirmation data has an ID
    assertIdExist() {
        this.jsonData.should('have.a.property', 'id')
        return this
    }

    // assert flight confirmation price to equal the previous price selected
    assertFlightPrice() {
        this.jsonData.should('have.a.property', 'amount', `@lowestPrice`)
        return this
    }
    // assert last 4 credit card numbers equal to last 4 credit card numbers entered before
    assertPaymentCardNumber() {
        this.jsonData.should('have.deep.property', 'paymment.cardNumber', `@creditCardNumber`)
        return this
    }

    // assert payment currency is in USD
    assertPaymentCurrency() {
        this.jsonData.should('have.a.property', 'currency', 'USD')
        return this
    }

    // assert credit card expiration month
    assertCardExpirationMonth() {
        this.jsonData.should('have.deep.property', 'payment.cardExpirationMonth', `@cardExpirationMonth`)
        return this
    }

    // assert credit card expiration month
    assertCardExpirationYear() {
        this.jsonData.should('have.deep.property', 'payment.cardExpirationYear', `@cardExpirationYear`)
        return this
    }

    // assert confirmation page date
    assertConfirmationPageDate() {

    }
}

export default ConfirmationPage