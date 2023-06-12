class CoursePage {
  elements = {
    macbookviewPort: () => cy.viewport("macbook-16"),
    courseTitleInputField: () => cy.get('[data-testid="Title*"]'),
    courseDescriptionInputField: () => cy.get('[data-testid="Description*"]'),
    courseCategoryDropdown: () => cy.get("#demo-simple-select"),
    selectSoftwareDevelopment: () => cy.get('[data-value="3"]'),
    offlineRadioBtn: () => cy.get('[data-testid="offline"]'),
    addressInputField: () => cy.get('[data-testid="Address*"]'),
    secondAddCourseBtn: () => cy.get(".css-tzsjye > .MuiButton-root"),
    onscreenMessageForCourseCreation: () =>
      cy.contains("Course created successfully"),
  };

  fillCourseForm(courseTitle, courseDescription, address) {
    this.elements.macbookviewPort();
    this.elements.courseTitleInputField().type(courseTitle);
    this.elements.courseDescriptionInputField().type(courseDescription);
    this.elements.courseCategoryDropdown().click();
    this.elements.selectSoftwareDevelopment().click();
    this.elements.offlineRadioBtn().click();
    this.elements.addressInputField().type(address);
    this.elements.secondAddCourseBtn().click();
    this.elements.onscreenMessageForCourseCreation().should("be.visible");
  }
}

export const coursePage = new CoursePage();
