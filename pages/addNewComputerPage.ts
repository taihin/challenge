import {$,ElementFinder} from "protractor"

export class addNewComputerPage{

    private fieldComputerName: ElementFinder;
    private fieldIntroDate: ElementFinder;
    private fieldDiscontinuedDate: ElementFinder;
    private dropdownCompany: ElementFinder;
    private optionCompany: ElementFinder;
    private btnCreate: ElementFinder;
    
    constructor(){
        this.fieldComputerName = $("x");
        this.fieldIntroDate = $("x");
        this.fieldDiscontinuedDate = $("x");
        this.dropdownCompany = $("x");
        this.optionCompany = this.dropdownCompany
        this.btnCreate = $("");
       
    }
    
    public enternComputerName(name:string){
        this.fieldComputerName.sendKeys(name);
    }

    public enterIntroDate(name:string){
        this.fieldComputerName.sendKeys(name);
    }

    public enterDiscontinuedDate(name:string){
        this.fieldComputerName.sendKeys(name);
    }

    //public chooseCompany(name:string){
    //    selectOption(selector, item)
    //    this.dropdownCompany.;
    // }

   public clickBtnCreate(){
       this.btnCreate.click();
   }


    //https://coderwall.com/p/tjx5zg/selecting-a-dropdown-option-with-webdriverjs

}