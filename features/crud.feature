@CRUD
Feature: To perform CRUD operation for database keeping track of the computers 

As a PC lease company
I want to keep track of the computer in used
So that I can take proer action on them


@Create
Scenario: Successfully create a computer
Given I am on the Computer Database homepage
When I add a computer in the system
Then I should see a message that the computer is successfully added into the system
