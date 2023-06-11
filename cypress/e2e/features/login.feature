Feature: Login page

    Feature Login Page work flow works appropriately.

    Background:
        Given A user is at the quales edu library login page
    Scenario: Success Login
        When A user enters the username "ayp@mail.com", the password "pass1234", and clicks on the login button
        Then The url will contains the quales library
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username     | password  |
            | ay2@mail.com | pass1234! |
        Then The error message "Password must be 8 characters with at least one letter and one digit" is displayed

    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username     | password     |
            | ayp@mail.com | testPassword |
        Then The password error message "Invalid Login Credential" is displayed