import {$,ElementFinder} from "protractor"

export class HomePage{

    public btnAddANewComputer: ElementFinder;
    public msg: ElementFinder;

    constructor(){
        this.btnAddANewComputer = $("x");
        this.msg = $("y");
    }
}