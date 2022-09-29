
import { Constants } from "../constants"

export class FinishBuyingPage {

    clickAgree() {
        cy.get('#termsofservice').check()

    }
    checkoutButton() {
        cy.get('#checkout').click()
    }
    fillForm() {
        // cy.get('#BillingNewAddress_FirstName').type(`${Constants.FIRST_NAME}`)
        // cy.get('#BillingNewAddress_LastName').type(`${Constants.LAST_NAME}`)
        // cy.get('#BillingNewAddress_Email').type(`${Constants.EMAIL}`)
        // cy.get('#BillingNewAddress_Company').type(`${Constants.COMPANY_NAME}`)
        cy.get('#BillingNewAddress_CountryId').select(`${Constants.COUNTRY}`)
        cy.get('#BillingNewAddress_City').type(`${Constants.City}`)
        cy.get('#BillingNewAddress_Address1').type(`${Constants.ADDRESS}`)
        cy.get('#BillingNewAddress_ZipPostalCode').type(`${Constants.ZIP_CODE}`)
        cy.get('#BillingNewAddress_PhoneNumber').type(`${Constants.PHONE_NUMBER}`)
    }
    continueButton() {
        cy.get('#billing-buttons-container > .new-address-next-step-button').click()
    }
    shippingOption() {
        cy.get('#shippingoption_1').check()
    }

    shippingMethodContinue() {
        cy.get('div.master-wrapper-page:nth-child(6) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.checkout-page div.page-body.checkout-data ol.opc li.tab-section.allow.active:nth-child(3) div.step.a-item form:nth-child(1) div.buttons:nth-child(2) > button.button-1.shipping-method-next-step-button').click({ force: true })
    }

}

// ccIframe = cy.get(iframe)
// .its('0.contentDocument.body')
// .should('not.be.empty')
// .then(body => {
//     cy.wrap(body)
//         .within({}, $iframe => {
//             cy.get(element)
//                 .type(value)
//         })
// })