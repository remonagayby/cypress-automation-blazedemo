import HomePage from "../Pages/01_homePage.cy";

let homePage = new HomePage();

beforeEach(() => {
  homePage.visitWebsite();
});

it("Should successfully show confirmation page header", () => {
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
    .assertConfirmationPageHeader();
});

it("Should confirmation flight data has ID", () => {
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
    .assertIdExist();
});

it("Should confirmation date equals current date", () => {
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
    .assertConfirmationDateAndTime();
});

it("Should flight price equal to the lowest price selected", () => {
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
    .assertConfirmationPageUrl()
    .assertFlightPrice();
});

it("Should the payment currency text is USD", () => {
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
    .assertConfirmationPageUrl()
    .assertPaymentCurrency();
});

it("Should last 4 credit card number equal to last 4 credit card number entered", () => {
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
    .assertConfirmationPageUrl()
    .assertPaymentCardNumber();
});

it("Should card expiration month equal to card expiration month entered", () => {
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
    .assertConfirmationPageUrl()
    .assertCardExpirationMonth();
});

it("Should card expiration year equal to card expiration year entered", () => {
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
    .assertConfirmationPageUrl()
    .assertCardExpirationYear();
});
