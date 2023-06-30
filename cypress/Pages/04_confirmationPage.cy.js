class ConfirmationPage {

    // get confirmation page header
    get pageHeader() {
        return cy.get('h1')
    }

    // get the confirmation page url
    get pagerUrl() {
        return cy.url()
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


}

export default ConfirmationPage