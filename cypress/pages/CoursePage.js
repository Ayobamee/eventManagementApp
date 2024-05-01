class CoursePage {
  elements = {
    macbookviewPort: () => cy.viewport('macbook-16'),
    courseTitleInputField: () => cy.get('[data-testid="Title*"]'),
    courseDescriptionInputField: () => cy.get('[data-testid="Description*"]'),
    courseCategoryDropdown: () => cy.get('#demo-simple-select'),
    selectSoftwareDevelopment: () => cy.get('[data-value="3"]'),
    offlineRadioBtn: () => cy.get('[data-testid="offline"]'),
    addressInputField: () => cy.get('[data-testid="Address*"]'),
    secondAddCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
    onscreenMessageForCourseCreation: () =>
      cy.contains('Course created successfully'),
    selectCourse: () => cy.get('div:nth-of-type(2) > img'),
    editCourseBtn: () => cy.get('.css-klop1v'),
    updateCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
    onscreenMessageForCourseUpdate: () =>
      cy.contains('Course updated successfully'),

    deleteCourseBtn: () => cy.get('button.css-wvpqgg'),
    secondDeleteBtn: () =>
      cy.get('div.MuiModal-root button.MuiButton-contained'),
    onscreenMessageForCourseDeletion: () =>
      cy.contains('Course deleted successfully'),
  }

  fillCourseForm(courseTitle, courseDescription, address) {
    this.elements.macbookviewPort()
    this.elements.courseTitleInputField().type(courseTitle)
    this.elements.courseDescriptionInputField().type(courseDescription)
    this.elements.courseCategoryDropdown().click()
    this.elements.selectSoftwareDevelopment().click()
    this.elements.offlineRadioBtn().click()
    this.elements.addressInputField().type(address)
    this.elements.secondAddCourseBtn().click()
    this.elements.onscreenMessageForCourseCreation().should('be.visible')
  }

  editCourse() {
    this.elements.selectCourse().click()
    this.elements.editCourseBtn().click({ force: true })
    this.elements.updateCourseBtn().click()
    this.elements.onscreenMessageForCourseUpdate().should('be.visible')
  }

  deleteCourse() {
    this.elements.selectCourse().click()
    this.elements.deleteCourseBtn().click({ force: true })
    this.elements.secondDeleteBtn().click()
    this.elements.onscreenMessageForCourseDeletion().should('be.visible')
  }
}

export const coursePage = new CoursePage()
