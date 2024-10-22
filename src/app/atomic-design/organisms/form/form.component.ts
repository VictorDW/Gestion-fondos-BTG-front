import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants, DataForm, Numbers, Pattern, StyleButton } from 'src/app/shared/enums/enums';
import { IClientService } from 'src/app/shared/interface/IClientService';
import { IFundService } from 'src/app/shared/interface/IFundService';
import { buttonStructure, OptionSelect } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() closeForm = new EventEmitter<void>();
  
  form: FormGroup = new FormGroup({});
  dataForm = DataForm;
  titleForm: string = this.dataForm.title_form
  optionsFunds: OptionSelect<number>[] = [];
  fundIdSelect: number;
  itemButton: buttonStructure = StyleButton.SUBSCRITION;

  constructor(private clientService: IClientService) {
    this.form = this.addValidations();
    this.fillContentSelectCategory();
    this.fundIdSelect = this.optionsFunds[Numbers.NUM_ZERO].value;
  }

  private fillControls() {
    return {
      investmentAmount: new FormControl(
        Constants.EMPTY_STRING,
        [Validators.required,
        Validators.pattern(Pattern.AMOUNT)])
    };
  }

  private addValidations(): FormGroup {
    return new FormGroup(this.fillControls());
  }

  private fillContentSelectCategory(): void {
    this.optionsFunds = [
      {value: 3, name: 'DEUDAPRIVADA'},
      {value: 4, name: "FDO-ACCIONES"},
      {value: 5, name: "FPV_BTG_PACTUAL_DINAMICA"},
      {value: 2, name: "FPV_BTG_PACTUAL_ECOPETROL"},
      {value: 1, name: "FPV_BTG_PACTUAL_RECAUDADORA"}
    ];
  }

  onCloseForm(): void {
    this.closeForm.emit();
  }

  updateSelectedOption(value: number) {
    this.fundIdSelect = value;
  }

  onSubmitForm() {
    if(this.form.valid) {
      console.log(this.form.get(this.dataForm.controle_amount)?.value);
      console.log(this.fundIdSelect);
      this.clientService.subscriptionFund({
        fundId: this.fundIdSelect,
        investmentAmount: this.form.get(this.dataForm.controle_amount)?.value
      }).subscribe();
    }
  }

  verifyError(controlInput: string) {
    return this.form.get(controlInput)?.invalid && this.form.get(controlInput)?.dirty;
  }

  disableButton(): boolean {
    return this.form.invalid;
  }


}
