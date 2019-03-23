@crud
Feature: To perform CRUD operation for database keeping track of the computers 

As a computer lease company
I want to keep track of all the computers
So that I can take proper action on them


@create
Scenario: Successfully create a computer in the system by only filling in the required fields
Given I am on the Computer Database homepage
When I add a computer in the system
Then I should see a message that the computer is successfully added into the system

@create
Scenario: Unsuccessfully create a computer in the system, when required field is missing
Given I am on the Computer Database homepage
When I add a computer without filling in the required name of the computer
Then the computer is not added to the system

@create
Scenario: Unsuccessfully create a computer in the system, when Discontinued date is before Introduced date 
Given I am on the Computer Database homepage
When I add a computer by filling in the Discontinued date is actually before the Introduced date
Then the computer is not added to the system

@read
Scenario: Find a computer in the system
Given a computer is newly created 
When search for this computer
Then I should be able to find it in the system

@update
Scenario: Update the introduced and disconintued date in the computer
Given a computer is disconintued
When I update the discontinued date
Then I should see that the discontinued date is updated

@delete
Scenario: Remove a computer from the system
Given I am on the Edit Page
When I remove the first computer on the list
Then I will not be able to find it in the system