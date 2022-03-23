import { cyan50 } from "material-ui/styles/colors"

describe("Vinterior homepage", function() {

        it('Should visit the website', () => {
            cy.visit('www.vinterior.co');
        });

        it('Should clear the cookies', () => {
            cy.clearCookies()
            
        });

        it('Find FAQ on the page', () => {

            cy.contains('FAQ').click()
            
        });
})