/// <reference types="cypress" />

import { FinishBuyingPage } from "../../pages/finishBuyingPage.cy"
import { LoginPage } from "../../pages/loginPage.cy"
import { Registration } from "../../pages/registrationPage.cy"

describe('Buy Test', () => {
    const registration = new Registration()
    const loginPage = new LoginPage()
    const finsihBuy = new FinishBuyingPage()

    Cypress.Cookies.defaults({
        preserve: '.Nop.Authentication'
    })
    before(() => {
        registration.homepage()
        loginPage.loginButton()
        loginPage.emailLogin()
        loginPage.passwordLogin()
        loginPage.submitButton()
    })
    after(() => {
        cy.get('.ico-logout').click()
    })


    it('Login and navigate to Camera and Photo Page', () => {
       
        loginPage.navigateToCellPhonesPage()
    })
    it('Add Product To Cart and open the cart', () => {
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click()
        cy.get('#add-to-cart-button-19').click()
        cy.get('#topcartlink').click()
    })
    it('Add credit card and finish shoping', () => {
        finsihBuy.clickAgree()
        finsihBuy.checkoutButton()
        cy.visit('https://demo.nopcommerce.com/onepagecheckout#opc-billing')
        //finsihBuy.fillForm()
        finsihBuy.continueButton()
        finsihBuy.shippingOption()
        finsihBuy.continueButton()
        finsihBuy.shippingMethodContinue()
    })

})