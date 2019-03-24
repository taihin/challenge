import {$,ElementFinder, browser} from "protractor";

export class AddNewComputerPage{

    private fieldComputerName: ElementFinder;
    private fieldIntroDate: ElementFinder;
    private fieldDiscontinuedDate: ElementFinder;
    private dropdownCompany: ElementFinder;
    private firstOptionCompany: ElementFinder;
    private btnCreate: ElementFinder;
    
    constructor(){
        this.fieldComputerName = $("#name");
        this.fieldIntroDate = $("#introduced");
        this.fieldDiscontinuedDate = $("#discontinued");
        this.dropdownCompany = $("#company");
        this.firstOptionCompany =   $("option[value='1']");
        this.btnCreate = $("input[type=submit]");
    }
    
    public async addANewComputer(name:string, introDate :string, discontinuedDate :string, hasCompanyName: boolean){
        await this.enterComputerName(name);
        await this.enterIntroDate(introDate);
        await this.enterDiscontinuedDate(discontinuedDate);
        if (hasCompanyName){
             await this.chooseFirstCompany();
        }
        await this.clickBtnCreate();
    }
    
    public async enterComputerName(name:string){
        return await this.fieldComputerName.sendKeys(name);
 
    }

    public async enterIntroDate(date:string){
        return await this.fieldIntroDate.sendKeys(date);
    }

    public async enterDiscontinuedDate(date:string){
        return await this.fieldDiscontinuedDate.sendKeys(date);
    }

    public async chooseFirstCompany(){
        await this.dropdownCompany.click();

        await this.firstOptionCompany.click();

        await this.dropdownCompany.click();
       
     }

   public async clickBtnCreate(){
    await this.btnCreate.click();

   }

}