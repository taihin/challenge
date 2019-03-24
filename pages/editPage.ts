import {$, ElementFinder} from "protractor";

export class EditPage {

    private btnDeleteThisComputer: ElementFinder;
    private fieldName: ElementFinder;
    private fieldDiscontinuedDate: ElementFinder;
    private btnSaveThisComputer: ElementFinder;
    
    constructor(){
        this.btnDeleteThisComputer = $("input[value='Delete this computer']");
        this.fieldDiscontinuedDate = $("#discontinued");
        this.btnSaveThisComputer = $("input[value='Save this computer']");
        this.fieldName = $("#name");
    }
    
    public async deleteThisComputer(){
        await  this.btnDeleteThisComputer.click();

    }

    public async setDiscontinuedDate(date : string){
        await this.fieldDiscontinuedDate.sendKeys(date);
    }

    public async save(){
        await this.btnSaveThisComputer.click();
    }

    public async getBorderColorFieldComputerName(){
        return  this.fieldName.getCssValue('border-color');
    }
}