import {$,ElementFinder,element,by} from "protractor";

export class HomePage{

    private btnAddANewComputer: ElementFinder;
    private msg: ElementFinder;
    private fieldSearch: ElementFinder; 
    private btnFilterByName: ElementFinder;
    private tableFirstRowComputerName: ElementFinder;
    private table: ElementFinder;
    private textFieldNothingToDisplay: ElementFinder;
    public bull: ElementFinder;

    constructor(){
        this.btnAddANewComputer = $("#add");
        this.msg = $(".alert-message strong");
        this.fieldSearch = $("#searchbox");
        this.btnFilterByName = $("#searchsubmit");
        this.tableFirstRowComputerName = element(by.xpath("(//table//a)[5]"));
        this.table= element(by.xpath("//table"));
        this.textFieldNothingToDisplay=$(".well em");

        this.bull = $("xxxx");
    }

    public async clickOnButtonAddNewComputer(){
        await this.btnAddANewComputer.click();
        
    }

    public async getMessageStartWith(){
        return await this.msg.getText();
    }


    public async getNameFirstComputerAfterFilterByName( name : string ){
        console.log(name);
        await this.fieldSearch.sendKeys(name);
        await this.btnFilterByName.click();
        return await this.tableFirstRowComputerName.getText();

    }

    public async filterByName( name : string ){
        console.log(name);
        await this.fieldSearch.sendKeys(name);
        await this.btnFilterByName.click();
        return await this.tableFirstRowComputerName.getText();

    }

    public async clickOnComputerWithName( name : string ){
        await this.fieldSearch.sendKeys(name);
        await this.btnFilterByName.click();
        await this.table.element(by.xpath(".//a[text()='"+name+"']")).click();
    }


    public async isNotPresentInTheSystem(name : string){
        return (await this.textFieldNothingToDisplay !== null);
        
    }
}