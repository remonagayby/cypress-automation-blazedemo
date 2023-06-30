import HomePage from "../Pages/01_homePage.cy"

let homePage = new HomePage

beforeEach(() => {
    cy.visit('')
})

it('Should successfully show confirmation page header', () => {
    homePage
        .selectDepartureCity()
        .selectDestinationCity()
        .clickFindFlights()
        .assertReservePageUrl()
        .selectLowestPrice()
        .assertPurchasePageUrl()
        .typeName()
        .typeAddress()
        .typeCity()
        .typeState()
        .typeZipCode()
        .randomCardType()
        .typeCardNumber()
        .typeCardMonth()
        .typeCardYear()
        .checkRememberMe()
        .clickPurchaseFlight()
        .confirmationPageUrl()
        .confirmationPageHeader()
})