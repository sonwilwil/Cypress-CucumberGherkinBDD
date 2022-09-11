Feature: Testing login page

    Background: 
        Given A user visit login page

    Scenario: Failed Login, Incorrect credentials
        When A user enters credentials in login page
        | email               | password |
        | hahahah@yopmail.com | admin123 |
        | huhasuh@yopmail.com | ajshasja |
        Then Error message will be displayed in login page
        | error                        |
        | email or password is invalid |
    
    Scenario: Failed Login, Blank email
        When A user enters the password in login page
        | password |
        | admin123 |
        Then Error message will be displayed in login page
        | error                        |
        | email can't be blank         |
    
    Scenario: Failed Login, Blank password
        When A user enters the email in login page
        | email               |
        | hahahah@yopmail.com |
        Then Error message will be displayed in login page
        | error                        |
        | password can't be blank      |

    Scenario: Success Login
        When A user enters credentials in login page
        | email                 | password |
        | wilwilson@yopmail.com | admin123 |
        Then A user will direct to homepage