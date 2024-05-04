import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { eventPage } from '@pages/EventPage'
import { homePage } from '@pages/HomePage'
import { landingPage } from '@pages/LandingPage'

Given('A user is logged into the app', () => {
  cy.visit('/')
  landingPage.fillInLoginInformation()
  homePage.checkHomePageItems()
})

Then('The user can navigate to view the event page', () => {
  eventPage.checkEventPageItems()
})

When('The user clicks the create event button', () => {
  eventPage.clickCreateEventButton()
})
