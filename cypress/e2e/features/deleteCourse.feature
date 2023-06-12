Feature: Delete course page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user is logged into the Quales App
    Scenario:  Delete Course
        When I view my courses
        Then I can delete a course successfully

