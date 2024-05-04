import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { landingPage } from '@pages/LandingPage'
import { homePage } from '@pages/HomePage'

Given('A user is at the liveet login page', () => {
  cy.visit('/')
})

When(
  'The user inputs approrpraite credentials during the login process',
  () => {
    landingPage.fillInLoginInformation()
  }
)

When('The user provides incorrect credentials during the login process', () => {
  landingPage.fillLoginFormWithIncorrectCredentialsInformation()
})
Then('The user should be directed to the liveet home page', () => {
  homePage.checkHomePageItems()
})

Then(
  'An error message should be displayed and user should not be directed to the liveet home page',
  () => {
    landingPage.loginError()
  }
)
