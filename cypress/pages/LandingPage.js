class LandingPage {
  elements = {
    registerLoginBtn: () => cy.get('div').contains('Login'),
    countryDropdown: () => cy.get('.iti__selected-flag > .iti__flag'),
    initializeWait: () => cy.wait(1000),
    telephoneNoInputField: () => cy.get('input[type="tel"]'),
    continueBtn: () => cy.get('button').contains('Continue'),
    passwordInput: () =>
      cy.get('input[placeholder="Password"]', { timeout: 10000 }),
    errorMessage: () =>
      cy.get('div').contains('Password Not Correct. Please Try Again'),
  }

  fillInLoginInformation() {
    this.elements.registerLoginBtn().click()
    this.elements.countryDropdown().click()
    this.elements.initializeWait()
    this.elements.telephoneNoInputField().click().type(Cypress.env('USERNAME'))
    this.elements.continueBtn().click()
    this.elements.passwordInput().type(Cypress.env('PASSWORD'))
    this.elements.continueBtn().click()
  }

  fillLoginFormWithIncorrectCredentialsInformation() {
    this.elements.registerLoginBtn().click()
    this.elements.countryDropdown().click()
    this.elements.initializeWait()
    this.elements.telephoneNoInputField().click().type(Cypress.env('USERNAME'))
    this.elements.continueBtn().click()
    this.elements.passwordInput().type(Cypress.env('INCORRECTPASSWORD'))
    this.elements.continueBtn().click()
  }

  loginError() {
    this.elements.errorMessage().should('be.visible')
  }
}

export const landingPage = new LandingPage()
