import PricesPage from "./reservationPage.cy"

class HomePage {
    get departureCity() {
        return cy.get('[name="fromPort"]')
    }

    get destinationCity() {
        return cy.get('[name="toPort"]')
    }

    get findFlights() {
        return cy.get('[value="Find Flights"]')
    }

    visitWebsite() {
        cy.visit('/')

        return new HomePage
    }

    selectDepartureCity() {
        this.departureCity.then(dropdown => {
            const options = dropdown.find('option');
          
            // Get the number of options in the dropdown
            const numOptions = options.length;
          
            // Generate a random index between 0 and the number of options
            const randomIndex = Math.floor(Math.random() * numOptions);
          
            // Select the option at the random index
            cy.wrap(dropdown).select(options[randomIndex].value);
          })

        return new HomePage
    }

    selectDestinationCity() {
        // pick a random city from the dropdown list
        this.destinationCity.then(dropdown => {
            const options = dropdown.find('option');
          
            // Get the number of options in the dropdown
            const numOptions = options.length;
          
            // Generate a random index between 0 and the number of options
            const randomIndex = Math.floor(Math.random() * numOptions);
          
            // Select the option at the random index
            cy.wrap(dropdown).select(options[randomIndex].value);
          })

        return new HomePage
    }

    getRandomNum(min, max){
        // generate a random integer between two specific numbers
        return Math.floor(Math.random() * (max - min + 1)) + min;    
      } 

    clickFindFlights() {
        this.findFlights.click()

        return new PricesPage
    }

}

export default HomePage