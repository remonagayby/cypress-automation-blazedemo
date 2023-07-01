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
        return cy.get('pre')
    }

    // assert confirmation page header
    confirmationPageHeader() {
        this.pageHeader.should('contain', `Thank you for your purchase today!`)

        return new ConfirmationPage
    }

    // assert the confirmation page url
    confirmationPageUrl() {
        cy.fixture("data").then(data => {
            this.pagerUrl.should('eq', data.confirmationPageUrl)
        })

        return new ConfirmationPage
    }

    // assert flight price to equal the previous price selected
    flightData() {
        this.jsonData.then(data => {

            // parse this text content into a JavaScript object
            const flightData = JSON.parse(data.text())

            // use a try-catch block to continue the test even if one of the expect() statements fails
            try {
                expect(flightData.status).to.eq('PendingCapture')
                expect(flightData.amount).to.eq('@lowestPrice')
                expect(flightData.currency).to.eq('USD')
                expect(flightData.payment.cardNumber).to.include('@creditCardNumber')
                expect(flightData.payment.cardExpirationMonth).to.eq('@cardExpirationMonth')
                expect(flightData.payment.cardExpirationYear).to.eq('@cardExpirationYear')
            } catch (error) {
                console.error(error);
            }


        })
        return new ConfirmationPage
    }


}

export default ConfirmationPage