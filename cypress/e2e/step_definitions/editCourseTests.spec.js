import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { landingPage } from "@pages/LandingPage";
import { coursePage } from "@pages/CoursePage";

Given("A user is successfully logged into the Quales App", () => {
  cy.fixture("testData").then((users) => {
    const testUser = users.userDetails;
    cy.visit("/");
    loginPage.submitLogin(testUser.username, testUser.password);
  });
});

When("I view my list of courses", () => {
  cy.visit("/courses");
});

Then("I can edit a course successfully", () => {
  coursePage.editCourse();
});
