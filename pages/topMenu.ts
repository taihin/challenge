import {$,ElementFinder, element, by} from "protractor";

export class TopMenu{

    private playSampleApplicationLink: ElementFinder;

    constructor(){
        this.playSampleApplicationLink = element(by.xpath("//a[contains(text(), 'Play sample application')]"));
    }

    public async goToHomePage(){
        await this.playSampleApplicationLink.click();
        
    }

}