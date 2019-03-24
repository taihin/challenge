import { browser } from "protractor";
import { HomePage } from "../pages/homepage";
import { AddNewComputerPage } from "../pages/AddNewComputerPage";
import { When, Then } from "cucumber";
import { TopMenu } from "../pages/topMenu";
import { EditPage } from "../pages/EditPage";

const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const topMenu: TopMenu = new TopMenu();
const homePage: HomePage = new HomePage();
const addNewComputerPage: AddNewComputerPage = new AddNewComputerPage();
const editPage: EditPage = new EditPage();
let computerName: string = "Test Computer" + + new Date();
let ComputerNameDateMismatched: string = "ComputerDateMismatched";

Given(/^I am on the Computer Database homepage$/, async () => {
  await expect(browser.getTitle()).to.eventually.equal("Computers database");
});

Given(/^a computer is newly created$/, async () => {
  await homePage.clickOnButtonAddNewComputer();
});

Given(/^I want to remove computer with name "(.*?)"$/, async (name) => {
  await homePage.clickOnButtonAddNewComputer();
  await addNewComputerPage.addANewComputer(name, "2010-11-01", "", true);

  let s6Msg = await homePage.getMessageStartWith();
  expect(s6Msg).to.be.equal("Done!");

});


Given(/^the computer with name "(.*?)" is disconintued$/, async (name) => {
  await homePage.clickOnButtonAddNewComputer();
  await addNewComputerPage.addANewComputer(name, "2010-11-01", "", true);

  let s6Msg = await homePage.getMessageStartWith();
  expect(s6Msg).to.be.equal("Done!");

});


Given(/^I am on the Edit page of the computer "(.*?)"$/, async (name) => {

  await homePage.clickOnComputerWithName(name);

});

When(/^I remove this computer$/, async () => {
  await editPage.deleteThisComputer();
});

When(/^I update the discontinued date to "(.*?)"$/, async (date) => {
  await editPage.setDiscontinuedDate(date);
  await editPage.save();
});

When(/^I add a computer in the system$/, async () => {
  await homePage.clickOnButtonAddNewComputer();
  await addNewComputerPage.addANewComputer(computerName, "", "", false)
});

When(/^I add a computer without filling in the required name of the computer$/, async () => {
  await homePage.clickOnButtonAddNewComputer();
  await addNewComputerPage.enterIntroDate("2015-11-01");
  await addNewComputerPage.enterDiscontinuedDate("2018-11-01");
  await addNewComputerPage.chooseFirstCompany();
  await addNewComputerPage.clickBtnCreate();
});

When(/^I add a computer by filling in the Discontinued date is actually before the Introduced date$/, async () => {
  await homePage.clickOnButtonAddNewComputer();
  await addNewComputerPage.addANewComputer(ComputerNameDateMismatched, "2018-01-01", "2000-01-01", true)
});

Then(/^I should see a message that the computer is successfully (.*?) the system$/, async (textIgnore) => {
  let expectedSuccessMsgStartWith = "Done!";
  let actualMsgStartWith = await homePage.getMessageStartWith();

  expect(actualMsgStartWith).to.be.equal(expectedSuccessMsgStartWith);

});

Then(/^the computer is not added to the system as the required field is not filled in$/, async () => {
  let expectedBorderColor = "rgb(200, 120, 114)";
  let actualBorderColor = await editPage.getBorderColorFieldComputerName();

  expect(actualBorderColor).to.be.equal(expectedBorderColor);
});


Then(/^I should be able to find it in the system$/, async () => {
  await topMenu.goToHomePage();
  await expect(browser.getTitle()).to.eventually.equal("Computers database");
  let actualName = await homePage.getNameFirstComputerAfterFilterByName(computerName);

  expect(actualName).to.be.equal(computerName);

});

Then(/^the computer is not added to the system$/, async () => {
  await topMenu.goToHomePage();
  await expect(browser.getTitle()).to.eventually.equal("Computers database");
  await homePage.filterByName(ComputerNameDateMismatched);

  let isPresent =  await homePage.isNotPresentInTheSystem(ComputerNameDateMismatched);
  console.log("*** is Present:"+ isPresent);
  //await homePage.bull.click();
  expect(isPresent).to.be.false;
});