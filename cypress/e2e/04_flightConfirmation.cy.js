import HomePage from "../Pages/01_homePage.cy"

let homePage = new HomePage

beforeEach(() => {
    homePage.visitWebsite()
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

it.only('Should flight price equal to the price we selected', () => {
    homePage
        .selectDepartureCity()
        .selectDestinationCity()
        .clickFindFlights()
        .selectLowestPrice()
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
        .flightData()
})