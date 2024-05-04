import { faker } from '@faker-js/faker'
const eventName = `Event-${faker.company.catchPhrase()}`

class EventPage {
  elements = {
    myEventsTab: () => cy.get('div').contains('My Events'),
    myEventsHeader: () => cy.get('h3').contains('My Events'),
    createdByYouDiv: () => cy.get('li').contains('Created by You'),
    attendingDiv: () => cy.get('li').contains('Attending'),
    pastEventsDiv: () => cy.get('li').contains('Past Events'),
    createEventBtn: () => cy.get('a').contains('Create Event'),
    createEventHeader: () => cy.get('h3').contains('Create new event'),
    createEventDiv: () => cy.get('li').contains('Create new event'),
    eventDetailsDiv: () => cy.get('li').contains('Event Details'),
    ticketDetailsDiv: () => cy.get('li').contains('Ticket Details'),
    eventControlsDiv: () => cy.get('li').contains('Event Controls'),
    eventNameInputField: () => cy.get('input[name="event_name"]'),
  }

  checkEventPageItems() {
    this.elements.myEventsTab().click()
    cy.url().should('contains', '/my-events')
    this.elements.myEventsHeader().should('be.visible')
    this.elements.createdByYouDiv().should('be.visible')
    this.elements.attendingDiv().should('be.visible')
    this.elements.pastEventsDiv().should('be.visible')
  }

  clickCreateEventButton() {
    this.elements.createEventBtn().click()
    cy.url().should('contains', '/event/create')
    this.elements.createEventHeader().should('be.visible')
    this.elements.createEventDiv().should('be.visible')
    this.elements.eventDetailsDiv().should('be.visible')
    this.elements.ticketDetailsDiv().should('be.visible')
    this.elements.eventControlsDiv().should('be.visible')
    this.elements.eventNameInputField().type(eventName)
  }
}

export const eventPage = new EventPage()
