import {$,ElementFinder} from "protractor"

export class HomePage{

    public btnAddANewComputer: ElementFinder;
    public msg: ElementFinder;

    constructor(){
        this.btnAddANewComputer = $("#add");
        this.msg = $("y");
    }

    public async ClickOnButtonAddNewComputer(){
        await this.btnAddANewComputer.click();
    }
}