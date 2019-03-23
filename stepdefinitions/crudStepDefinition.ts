import {browser} from "protractor"
import { HomePage } from "../pages/homepage";
import { AddNewComputerPage} from "../pages/AddNewComputerPage";
import { When, Then } from "cucumber";
import { TopMenu } from "../pages/topMenu";

const {Given}  = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const topMenu :TopMenu = new TopMenu();
const homePage :HomePage = new HomePage();
const addNewComputerPage: AddNewComputerPage = new AddNewComputerPage();
let computerName :string = "Test Computer" + + new Date();
let computerNameNonExist :string = "Test Computer" + + new Date()+"";

Given(/^I am on the Computer Database homepage$/, async()=>{
    
    await expect(browser.getTitle()).to.eventually.equal("Computers database");

} );

When(/^I add a computer in the system$/, async()=>{
    await homePage.clickOnButtonAddNewComputer()
    await addNewComputerPage.enterComputerName(computerName)
    await addNewComputerPage.enterIntroDate("2015-11-01")
    await addNewComputerPage.enterDiscontinuedDate("2018-11-01");
    await addNewComputerPage.chooseFirstCompany()
    await addNewComputerPage.clickBtnCreate();
} );

When('I add a computer without filling in the required name of the computer', async()=> {
    await homePage.clickOnButtonAddNewComputer()
    await addNewComputerPage.enterIntroDate("2015-11-01")
    await addNewComputerPage.enterDiscontinuedDate("2018-11-01");
    await addNewComputerPage.chooseFirstCompany()
    await addNewComputerPage.clickBtnCreate();
  });


Then(/^I should see a message that the computer is successfully added into the system$/, async () => {
    let expectedSuccessMsgStartWith = "Done!";
    let actualMsgStartWith = await homePage.getMessageStartWith();

    expect(actualMsgStartWith).to.be.equal(expectedSuccessMsgStartWith);
    
});


Then(/^I should be able to find it in the system$/, async () => {
    await topMenu.goToHomePage();
    await expect(browser.getTitle()).to.eventually.equal("Computers database");
    let actualName = await homePage.getNameFirstComputerAfterFilterByName(computerName);

    expect(actualName).to.be.equal(computerName);

});