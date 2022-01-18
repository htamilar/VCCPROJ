Feature: Automating the volvocars homepage

    Scenario: TC-001 Navigating to homepage, click on ourcars link on top right corner and verify the available vehicles

        Given the start page is the homepage
        When the Ourcars link is clicked on the top right corner
        Then the Hybrid categories of vehicle are present 

    Scenario: TC-002 Verify that under Hydrids, 4th SUV models is not present

        Given Homepage is launched
        When Click in Our Cars link
        Then 4th SUv model is not present

    Scenario: TC-003 Verify that the video in the homepage is playing

        Given the start page is  homepage
        When I click on the watch video link
        Then verify the video playing   
    
    