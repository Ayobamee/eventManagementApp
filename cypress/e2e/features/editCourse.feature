Feature: Edit course page

    Feature User can modify a course previously created.

    Background:
        Given A user is successfully logged into the Quales App
    Scenario:  Edit Course
        When I view my list of courses
        Then I can edit a course successfully

