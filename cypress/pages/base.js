import url from "../fixtures/url.json"
import h2 from "../fixtures/h2Messages.json"
import search from "../fixtures/search.json"
class Base {

    searchField () { return cy.get('.search-form') }
    seachButton () { return cy.get('.search-button') }
    photoContainer () { return cy.get('.photo-container > div > ul > li', { timeout: 15000 } ) }
    mountainsTab () { return cy.get('.main-nav > ul > li:nth-child(1) > a', { timeout: 15000 } ) }
    beachesTab () { return cy.get('.main-nav > ul > li:nth-child(2) > a', { timeout: 15000 } ) }
    birdsTab () { return cy.get('.main-nav > ul > li:nth-child(3) > a', { timeout: 15000 } ) }
    foodTab () { return cy.get('.main-nav > ul > li:nth-child(4) > a', { timeout: 15000 } ) }
    h2Message () { return cy.get('#root > div > div:nth-child(2) > h2', { timeout: 15000 } ) }
    noImageMessage () { return cy.get('#root > div > div:nth-child(2) > div > div > div > h2', { timeout: 15000 } ) }
    goToURL () { return cy.visit(url.mainPage) }
    

    searchImage () {
       this.searchField().type(search.searchOwls)
       this.seachButton().click()
       this.h2Message().should('have.text', h2.mainPageH2Message)
       cy.url().should('include', url.owlSearchUrlInclude)
       this.photoContainer().find('img').should('have.length', 24)
    }

    clickMountainsOption () {
        this.mountainsTab().click()
        this.h2Message().should('have.text', h2.mountainPageH2Message)
        this.photoContainer().find('img').should('have.length', 24)
        cy.url().should('eq', url.mountainPage)
     }

     clickBeachesOption () {
        this.beachesTab().click()
        this.h2Message().should('have.text', h2.beachesPageH2Message)
        this.photoContainer().find('img').should('have.length', 24)
        cy.url().should('eq', url.beachesPage)
     }

     clickBirdsOption () {
        this.birdsTab().click()
        this.h2Message().should('have.text', h2.birdsPageH2Message)
        this.photoContainer().find('img').should('have.length', 24)
        cy.url().should('eq', url.birdsPage)
     }

     clickFoodOption () {
        this.foodTab().click()
        this.h2Message().should('have.text', h2.foodPageH2Message)
        this.photoContainer().find('img').should('have.length', 24)
        cy.url().should('eq', url.foodPage)
     }

     noImageFound () {
        this.searchField().type(search.invalidSearch)
        this.seachButton().click()
        this.h2Message().should('have.text', h2.mainPageH2Message)
        cy.url().should('include', url.noImageUrlInclude)
        this.noImageMessage().should('have.text', h2.noImageFoundH2Message)
     }
    
}

export default new Base()