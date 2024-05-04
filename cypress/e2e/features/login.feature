Feature: As a user, i want to be able to confirm that the login functionality works appropriately


    Background:
        Given A user is at the liveet login page
    Scenario: Login attempt using valid login credentials
        When The user inputs approrpraite credentials during the login process
        Then The user should be directed to the liveet home page
    Scenario:  Login attempt using invalid login credentials
        When The user provides incorrect credentials during the login process
        Then An error message should be displayed and user should not be directed to the liveet home page

