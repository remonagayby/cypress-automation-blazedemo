import PurchasePage from "./03_purchasePage.cy"

class ReservationPage {

    get pageUrl() {
        return cy.url()
    }

    get reservationPageHeader() {
        return cy.get('h3')
    }

    get flightPrices() {
        // select all the <td> elements with the nth-child(7) index within each row in the table
        return cy.get('tbody tr td:nth-child(7)')
    }

    // assert reservation page url
    assertReservePageUrl() {
        cy.fixture("data").then(data => {
            this.pageUrl.should('eq', data.reservationPageUrl)
        })

        return new ReservationPage
    }
    assertReservationPageHeader() {
        this.reservationPageHeader
            .should('contain', 'Flights from').and('contain', 'to')

        return new ReservationPage
    }

    selectLowestPrice() {
        cy.get('table tbody tr') // Get all the table rows in the tbody element
  .then(rows => {
    let lowestPrice = Number.MAX_SAFE_INTEGER;
    let lowestPriceRow;

    rows.each((index, row) => {
      const price = parseFloat(row.querySelector('td:nth-child(7)').textContent.replace('$', ''));
      if (price < lowestPrice) {
        lowestPrice = price;
        lowestPriceRow = row;
      }
    });

    // Store the lowest price as an alias
    cy.wrap(lowestPrice.toFixed(2)).as('lowestPrice');

    // Click the "Choose This Flight" button in the row with the lowest price
    cy.wrap(lowestPriceRow).within(() => {
      cy.get('input[type="submit"]').click();
    })
  })
        // const prices = [];

        // cy.get('tbody tr').each(($row) => {
        //   const price = parseFloat($row.find('td:nth-child(7)').text().replace('$', ''));
        //   prices.push(price);
        // }).then(() => {
        //   const lowestPrice = Math.min(...prices);
        
        //   // Find the row with the lowest price
        //   cy.get('tbody tr').contains(`$${lowestPrice.toFixed(2)}`).parent().within(() => {
        //     // Click the "Choose This Flight" button
        //     cy.get('input[type="submit"]').click();
        //   });
        // });

       return new PurchasePage
    }

    assertCitiesName() {
        this.reservationPageHeader
            .then($h3 => {
                const [fromCity, toCity] = $h3.text().replace('Flights from ', '').replace(': ', '').split(' to ')
                
                // Assert that the fromCity and toCity are correct
                cy.get('@departureCityName').should('contain', fromCity)
                cy.get('@destinationCityName').should('contain', toCity)
            })

        return new ReservationPage
    }
}

export default ReservationPage