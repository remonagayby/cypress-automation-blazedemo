import HomePage from "../Pages/homePage.cy"

let homePage = new HomePage

beforeEach(() => {
    homePage.visitWebsite()
})

it.only('Should select lowest price', () => {
    homePage
        .selectDepartureCity()
        .selectDestinationCity()
        .clickFindFlights()
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
        .checkRememberMe()
        .clickPurchaseFlight()        
})