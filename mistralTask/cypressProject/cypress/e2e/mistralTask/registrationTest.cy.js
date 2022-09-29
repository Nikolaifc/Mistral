/// <reference types="cypress" />

import { Registration } from "../../pages/registrationPage.cy"

describe('Registration Test', () => {

    const registration = new Registration()

    before(() => {
        registration.homepage()
    })

    it('Go to registration page', () => {
        registration.registerbutton()
    })

    it('Fill the form for registration',() => {
        registration.maleButton()
        registration.firstName()
        registration.lastName()
        registration.dayOfBirth()
        registration.monthOfBirth()
        registration.yearOfBirth()
        registration.email()
        registration.company()
        registration.password()
        registration.confirmedPassword()
        registration.confirmButton()
        cy.visit('https://demo.nopcommerce.com/registerresult/1?returnUrl=/')
    })
})