import {browser} from "protractor"
import { HomePage } from "../pages/homepage";
import { AddNewComputerPage} from "../pages/AddNewComputerPage";
import { When, Then } from "cucumber";

const {Given}  = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePage :HomePage = new HomePage();
const addNewComputerPage: AddNewComputerPage = new AddNewComputerPage();

Given(/^I am on the Computer Database homepage$/, async()=>{
    
    await expect(browser.getTitle()).to.eventually.equal("Computers database");

} );

When(/^I add a computer in the system$/, async()=>{
    await homePage.ClickOnButtonAddNewComputer()
    await addNewComputerPage.enterComputerName("Test Computer")
    await addNewComputerPage.enterIntroDate("2015-11-01")
    await addNewComputerPage.enterDiscontinuedDate("2018-11-01");
    await addNewComputerPage.chooseCompany("Apple Inc.")
    await addNewComputerPage.clickBtnCreate();
} );

Then(/^I should see a message that the computer is successfully added into the system$/, async () => {
    function stateChange(newState) {
        setTimeout(function () {
            if (newState == -1) {
                alert('VIDEO HAS STOPPED');
            }
        }, 5000);
    }
});