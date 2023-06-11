Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user logged into the Quales App
    Scenario:  Create Course
        When I click the Add Course button
        Then I can create a course successfully
