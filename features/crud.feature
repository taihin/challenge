@crud
Feature: To perform CRUD operation for database keeping track of the computers 

As a computer lease company
I want to keep track of all the computers
So that I can take proper action on them

#Edge case, only filling in the required fields
@create 
Scenario: Successfully create a computer in the system by only filling in the required fields
Given I am on the Computer Database homepage
When I add a computer in the system
Then I should see a message that the computer is successfully added into the system

#Edge case, only filling in all optional fields
@create 
Scenario: Unsuccessfully create a computer in the system by only filling in all optional fields
Given I am on the Computer Database homepage
When I add a computer without filling in the required name of the computer
Then the computer is not added to the system as the required field is not filled in

@create @broken-since-the-computer-is-added-into-the-system
Scenario: Unsuccessfully create a computer in the system, when Discontinued date is before Introduced date 
Given I am on the Computer Database homepage
When I add a computer by filling in the Discontinued date is actually before the Introduced date
Then the computer is not added to the system

@read
Scenario: Find a computer in the system
Given a computer is newly created 
Then I should be able to find it in the system

@update
Scenario: Update the disconintued date in the computer
Given the computer with name "Obsoleted" is disconintued
And I am on the Edit page of the computer "Obsoleted"
When I update the discontinued date to "2019-03-23"
Then I should see a message that the computer is successfully updated from the system

@delete
Scenario: Remove a computer from the system
Given I want to remove computer with name "Mistake"
And I am on the Edit page of the computer "Mistake"
When I remove this computer
Then I should see a message that the computer is successfully deleted from the system