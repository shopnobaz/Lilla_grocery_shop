Feature: Login
    As a user I want to be able to login
    so that I can buy products.

    Scenario: Clicking login button
        Given that I can see the login form
        When I fill in the form with "jahed@xyz.com" and "12345678"
        Then I should be logged in