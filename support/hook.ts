const {BeforeAll,After,AfterAll,Status} = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import {config} from "../config/config"

BeforeAll({timeout:100 * 1000}, async () =>{
    browser.manage().timeouts().implicitlyWait(10000);
    await browser.get(config.baseUrl);
});

After(async function(scenario){
    if(scenario.result.status === Status.FAILED){
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot,"image/png")
    }
});

AfterAll({timeout: 100 * 1000}, async() =>{
    await browser.quit();
})