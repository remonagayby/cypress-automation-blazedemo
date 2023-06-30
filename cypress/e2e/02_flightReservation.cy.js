import HomePage from "../Pages/homePage.cy"

let homePage = new HomePage

beforeEach(() => {
    homePage.visitWebsite()
})

it('Should header have departure and destination city names', () => {
    homePage
        .selectDepartureCity()
        .selectDestinationCity()
        .clickFindFlights()
        .assertReservationPageHeader()
        .assertCitiesName()
})

it.only('Should select lowest price', () => {
    homePage
        .selectDepartureCity()
        .selectDestinationCity()
        .clickFindFlights()
        .selectLowestPrice()
        .assertPurchasePageUrl()      
})