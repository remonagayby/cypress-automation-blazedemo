import ReservationPage from "./02_reservationPage.cy";

class HomePage {
  get departureCity() {
    return cy.get('[name="fromPort"]');
  }

  get destinationCity() {
    return cy.get('[name="toPort"]');
  }

  get findFlights() {
    return cy.get('[value="Find Flights"]');
  }

  visitWebsite() {
    cy.visit("/");

    return this;
  }

  selectDepartureCity() {
    this.departureCity.then((dropdown) => {
      const options = dropdown.find("option");

      // Select a random option
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedOption = options.eq(randomIndex);

      // Get the text of the selected option
      const selectedCity = selectedOption.text().trim();

      // Store the selected city as an alias
      cy.wrap(selectedCity).as("departureCityName");

      // Select the option
      cy.wrap(selectedOption)
        .invoke("val")
        .then((value) => {
          cy.wrap(dropdown).select(value);
        });
    });

    return this;
  }

  selectDestinationCity() {
    // pick a random city from the dropdown list
    this.destinationCity.then((dropdown) => {
      const options = dropdown.find("option");

      // Select a random option
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedOption = options.eq(randomIndex);

      // Get the text of the selected option
      const selectedCity = selectedOption.text().trim();

      // Store the selected city as an alias
      cy.wrap(selectedCity).as("destinationCityName");

      // Select the option
      cy.wrap(selectedOption)
        .invoke("val")
        .then((value) => {
          cy.wrap(dropdown).select(value);
        });
    });

    return this;
  }

  clickFindFlights() {
    this.findFlights.click();

    return new ReservationPage();
  }
}

export default HomePage;
