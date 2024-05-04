class HomePage {
  elements = {
    homeLink: () => cy.get('div').contains('Home'),
    myEventsLink: () => cy.get('div').contains('My Events'),
    favouriteLink: () => cy.get('div').contains('Favourite'),
    invitationLink: () => cy.get('div').contains('Invitation'),
    createEventBtn: () => cy.get('div').contains('Create Event'),
    logoutBtn: () => cy.get('div').contains('Log Out'),
    liveetImage: () => cy.get('img[alt="Liveet"]'),
    welcomeDiv: () => cy.get('div').contains('Welcome Ayo Elut'),
    featuredEventsDiv: () => cy.get('div').contains('Featured Events'),
    accessCodeDiv: () =>
      cy
        .get('div')
        .contains('Do you have an event Access Code. Please provide it '),
    allEventsTab: () => cy.get('div').contains('All Events'),
    privateEventsTab: () => cy.get('div').contains('Private Events'),
    publicEventsTab: () => cy.get('div').contains('Public Events'),
    footerLogo: () => cy.get('img[alt="Logo"]'),
    copyrightText: () =>
      cy.get('div').contains('© 2024 Liveet. All rights reserved'),
    termsAndConditionText: () =>
      cy.get('div').contains(' Terms and Conditions '),
    termsAndConditionUrl: () => 'https://liveet.gitbook.io',
    privacyPolicyLink: () => cy.get('div').contains(' Privacy Policy '),
  }

  checkHomePageItems() {
    cy.url().should('contains', '/home')
    this.elements.homeLink().should('be.visible')
    this.elements
      .homeLink()
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    this.elements.myEventsLink().should('be.visible')
    this.elements.favouriteLink().should('be.visible')
    this.elements.invitationLink().should('be.visible')
    this.elements.createEventBtn().should('be.visible')
    this.elements
      .createEventBtn()
      .should('have.css', 'background-color', 'rgb(254, 99, 78)')
    this.elements.logoutBtn().should('be.visible')
    this.elements
      .logoutBtn()
      .should('have.css', 'background-color', 'rgb(254, 99, 78)')
    this.elements.liveetImage().should('be.visible')
    this.elements.welcomeDiv().should('be.visible')
    this.elements.accessCodeDiv().should('be.visible')
    this.elements.featuredEventsDiv().should('be.visible')
    this.elements.allEventsTab().should('be.visible')
    this.elements.privateEventsTab().should('be.visible')
    this.elements.publicEventsTab().should('be.visible')
    cy.scrollTo('bottom')
    this.elements.footerLogo().should('be.visible')
    this.elements.copyrightText().should('be.visible')
    this.elements.termsAndConditionText().should('be.visible')
    this.elements
      .termsAndConditionText()
      .should('have.attr', 'href', this.elements.termsAndConditionUrl())
    this.elements.privacyPolicyLink().should('be.visible')
  }
}

export const homePage = new HomePage()
