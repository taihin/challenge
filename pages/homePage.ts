import {$,ElementFinder,element,by} from "protractor"

export class HomePage{

    private btnAddANewComputer: ElementFinder;
    private msg: ElementFinder;
    private fieldSearch: ElementFinder; 
    private btnFilterByName: ElementFinder;
    private tableFirstRowComputerName: ElementFinder;

    constructor(){
        this.btnAddANewComputer = $("#add");
        this.msg = $(".alert-message strong");
        this.fieldSearch = $("#searchbox");
        this.btnFilterByName = $("#searchsubmit");
        this.tableFirstRowComputerName =element(by.xpath("(//table//a)[1]"))
    }

    public async clickOnButtonAddNewComputer(){
        await this.btnAddANewComputer.click();
        
    }

    public async getMessageStartWith(){
        return await this.msg.getText();
    }


    public async filterByName(name : string){
        console.log(name);
        await this.fieldSearch.sendKeys(name);
        await this.btnFilterByName.click();
        return await this.tableFirstRowComputerName.getText();

    }
}