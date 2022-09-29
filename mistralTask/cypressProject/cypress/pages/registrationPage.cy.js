import { Constants } from "../constants"


export class Registration {


   homepage(){
        cy.visit('https://demo.nopcommerce.com/')
   }
   registerbutton(){
    cy.get('.ico-register').click()
   } 
   maleButton(){
    cy.get('#gender-male').check()
   }
   firstName(){
    cy.get('#FirstName').type(`${Constants.FIRST_NAME}`)
   }
   lastName(){
    cy.get('#LastName').type(`${Constants.LAST_NAME}`)
   }
   dayOfBirth(){
    cy.get('[name="DateOfBirthDay"]').select(`${Constants.DAY_OF_BIRTH}`).should('have.value', `${Constants.DAY_OF_BIRTH}`)
   }
   monthOfBirth(){
    cy.get('[name="DateOfBirthMonth"]').select(`${Constants.MONTH_OF_BIRTH}`).should('have.value','11')
   }
   yearOfBirth(){
    cy.get('[name="DateOfBirthYear"]').select(`${Constants.YEAR_OF_BIRTH}`,{timeout:5000}).should('have.value', `${Constants.YEAR_OF_BIRTH}`)
   }
   email(){
    cy.get('#Email').type(`${Constants.EMAIL}`)
   }
   company(){
    cy.get('#Company').type(`${Constants.COMPANY_NAME}`)
   }
   password(){
    cy.get('#Password').type(`${Constants.PASSWORD}`)
   }
   confirmedPassword(){
    cy.get('#ConfirmPassword').type(`${Constants.PASSWORD}`)
   }
   confirmButton(){
    cy.get('#register-button').click()
   }
}