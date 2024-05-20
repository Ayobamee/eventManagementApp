import { faker, th } from '@faker-js/faker'
const eventName = `Event-${faker.company.catchPhrase()}`
const venueAddress = `Venue-${faker.company.catchPhrase()}`
const description = `Description-${faker.company.catchPhrase()}`
const ticketName = `TicketName-${faker.company.catchPhrase()}`

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
    eventDateInputField: () => cy.get('input[name="event_date"]'),
    eventTimeInputField: () => cy.get('input[name="event_time"]'),
    specific2025calendar: () => cy.get('div.calendar-table .yearselect'),
    specificWeekend: () => cy.get('td.weekend.available'),
    applyBtn: () => cy.get('button').contains('Apply'),
    eighthApplyBtn: () => cy.get('button[type="button"]'),
    venueaddressInputField: () => cy.get('input[placeholder="Venue address"]'),
    descriptionnameInputField: () => cy.get('textarea[name="event_desc"]'),
    privateEventTypeBtn: () => cy.get('input[value="PRIVATE"]'),
    freePaymentTypeBtn: () => cy.get('input[value="FREE"]'),
    nextBtn: () => cy.get('button').contains('Next'),
    ticketDetailsText: () => cy.get('div').contains('Ticket Details'),
    addTicketBtn: () => cy.get('a').contains('Add ticket'),
    ticketNameInputField: () => cy.get('input[name="ticket_name"]'),
    noOfTickets: () => cy.get('input[name="ticket_population"]'),
    ticketDescriptionInputField: () =>
      cy.get('input[placeholder="Ticket description"]'),
    nextButton: () => cy.get('button'),
    eventControlsText: () => cy.get('div').contains('Event Controls'),
    allowInvitationRadioBtn: () =>
      cy.get('input[value="CAN_INVITE_RESTRICTED"]'),
    allowguesttransferTicketRadioBtn: () =>
      cy.get('input[value="CAN_TRANSFER"]'),
    nofaceIDRadioBtn: () => cy.get('input[value="NO_FACE_ID"]'),
    saveBtn: () => cy.get('button').contains('Save'),
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
    this.elements.eventDateInputField().click()
    this.elements.specific2025calendar().first().select('2025')
    this.elements.specificWeekend().first().click()
    this.elements.applyBtn().click()
    this.elements.eventTimeInputField().click()
    this.elements.eighthApplyBtn().eq(7).click({ force: true })
    this.elements.venueaddressInputField().type(venueAddress)
    this.elements.descriptionnameInputField().type(description)
    this.elements.privateEventTypeBtn().click()
    this.elements.freePaymentTypeBtn().click()
    this.elements.nextBtn().click()
    this.elements.ticketDetailsText().should('be.visible')
    this.elements.addTicketBtn().click()
    this.elements.ticketNameInputField().type(ticketName)
    this.elements.noOfTickets().type('5')
    this.elements.ticketDescriptionInputField().type('10')
    this.elements.nextButton().eq(2).click({ force: true })
    this.elements.eventControlsText().should('be.visible')
    this.elements.allowInvitationRadioBtn().click()
    this.elements.allowguesttransferTicketRadioBtn().click()
    this.elements.nofaceIDRadioBtn().click()
    this.elements.saveBtn().click()
  }
}

export const eventPage = new EventPage()
