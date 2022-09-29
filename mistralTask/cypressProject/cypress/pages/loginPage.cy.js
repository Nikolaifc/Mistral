import { Constants } from "../constants"

export class LoginPage{

    loginButton(){
        cy.get('.ico-login').click()
    }

    emailLogin(){
        cy.get('#Email').type(`${Constants.EMAIL}`)

    }
    passwordLogin(){
        cy.get('#Password').type(`${Constants.PASSWORD}`)
    }
    submitButton(){
        cy.get('button').contains('Log in').click()
    }
    navigateToCellPhonesPage(){
        cy.get('a').contains('Electronics').click({ force: true })
        cy.get('a').contains('Cell phones').click({force:true})
    }


}