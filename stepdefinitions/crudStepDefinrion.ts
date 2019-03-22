import {browser} from "protractor"
import { HomePage } from "../pages/homepage";

const {Given}  = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homepage :HomePage = new HomePage();

Given(/^ I am on the Computer Database homepage$/, async()=>{
    
    await expect(browser.getTitle()).to.eventually.equal("");

} );