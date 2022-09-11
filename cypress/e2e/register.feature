Feature: Testing register page

    Background: 
        Given A user visit register page
    
    Scenario: Failed registeration, Blank email and username
        When A user enters the password in register page
        | password |
        | admin123 |
        And A user clicks sign in button
        Then Error message will be displayed in register page
        | error                        |
        | email can't be blank         |
    
    Scenario: Failed registeration, Blank password and username
        When A user enters the email in register page
        | email                |
        | adminas123@gmail.com |
        And A user clicks sign in button
        Then Error message will be displayed in register page
        | error                           |
        | username can't be blank         |

    Scenario: Failed registeration, Blank password
        When A user enters the username and email in register page
        | username    | email                |
        | hahasjha    | adminas123@gmail.com |
        And A user clicks sign in button
        Then Error message will be displayed in register page
        | error                           |
        | password can't be blank         |

    Scenario: Failed registeration, Existing user
        When A user enters credentials in register page
        | username | email            | password |
        | jgdashasa   | asass1@yopmail.com | admin123 |
        And A user clicks sign in button
        Then Error message will be displayed in register page
        | error                                                         |
        | email has already been takenusername has already been taken   |

    # Scenario: Success registeration
    #     When A user enters credentials in register page
    #     | username | email            | password |
    #     | jgdashasa   | asass1@yopmail.com | admin123 |
    #     And A user clicks sign in button
    #     Then A user will direct to homepage