import HomePage from "../Pages/01_homePage.cy";

let homePage = new HomePage()

beforeEach(() => {
  homePage.visitWebsite()
});

it("Should not be able to purchase a flight without enter valid data fields", () => {
  homePage
    .selectDepartureCity()
    .selectDestinationCity()
    .clickFindFlights()
    .assertReservePageUrl()
    .selectLowestPrice()
    .assertPurchasePageUrl()
    .invalidPurchaseClick()
    .assertPurchasePageUrl()
});

it("Should be able to enter valid data fields and purchase a flight", () => {
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
    .assertConfirmationPageUrl()
});
