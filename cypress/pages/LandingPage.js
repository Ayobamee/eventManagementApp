class LandingPage {
  elements = {
    addCourseBtn: () =>
      cy.get(
        ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-klop1v"
      ),
  };

  clickAddCourse() {
    this.elements.addCourseBtn().click();
  }
}

export const landingPage = new LandingPage();
