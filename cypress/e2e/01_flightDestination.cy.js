import HomePage from "../Pages/homePage.cy"

let homePgae = new HomePage

beforeEach(() => {
  homePgae.visitWebsite()
})

it('Should select a flight', () => {
  homePgae
    .selectDepartureCity()
    .selectDestinationCity()
    .clickFindFlights()
})




