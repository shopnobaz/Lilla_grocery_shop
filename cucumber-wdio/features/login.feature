Feature: login
    As a user I want to be able to login to my account
    So that I can access my account

    Scenario: Login with valid credentials
        Given I am on the home page with login button
        When I click on the login button
        And I can see the login form
        And I enter my email as "adam@gmail.com"
        And I enter my password as "12345678"
        And I click on the login button
        Then I should see the home page with logout button

   