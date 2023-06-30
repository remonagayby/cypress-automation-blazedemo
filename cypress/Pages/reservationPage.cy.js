import PurchasePage from "./purchasePage.cy"

class ReservationPage {
    get reservationPageHeader() {
        return cy.get('h3')
    }

    get flightPrices() {
        // select all the <td> elements with the nth-child(7) index within each row in the table
        return cy.get('tbody tr td:nth-child(7)')
    }

    assertReservationPageHeader() {
        this.reservationPageHeader
            .should('contain', 'Flights from').and('contain', 'to')

        return new ReservationPage
    }

    selectLowestPrice() {
        const prices = [];

        cy.get('tbody tr').each(($row) => {
          const price = parseFloat($row.find('td:nth-child(7)').text().replace('$', ''));
          prices.push(price);
        }).then(() => {
          const lowestPrice = Math.min(...prices);
        
          // Find the row with the lowest price
          cy.get('tbody tr').contains(`$${lowestPrice.toFixed(2)}`).parent().within(() => {
            // Click the "Choose This Flight" button
            cy.get('input[type="submit"]').click();
          });
        });

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