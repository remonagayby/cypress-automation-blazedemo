import HomePage from "../Pages/01_homePage.cy"

let homePage = new HomePage

beforeEach(() => {
    homePage.visitWebsite()
})

it('Should successfully purchase a flight', () => {
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
})