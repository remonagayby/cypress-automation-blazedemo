import HomePage from "../Pages/01_homePage.cy"

let homePage = new HomePage

beforeEach(() => {
    homePage.visitWebsite()
})

it('Should the header have departure and destination city names', () => {
    homePage
        .selectDepartureCity()
        .selectDestinationCity()
        .clickFindFlights()
        .assertReservePageUrl()
        .assertReservationPageHeader()
        .assertCitiesName()
})

it('Should select lowest price', () => {
    homePage
        .selectDepartureCity()
        .selectDestinationCity()
        .clickFindFlights()
        .assertReservePageUrl()
        .assertReservationPageHeader()
        .assertCitiesName()
        .selectLowestPrice()
        .assertPurchasePageUrl()      
})