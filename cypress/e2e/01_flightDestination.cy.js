import HomePage from "../Pages/01_homePage.cy";

let homePgae = new HomePage();

beforeEach(() => {
  homePgae.visitWebsite();
});

it("Should be able to select a flight", () => {
  homePgae
    .selectDepartureCity()
    .selectDestinationCity()
    .clickFindFlights()
    .assertReservePageUrl();
});
