import { Component, Input } from '@angular/core';
import { Constants, Direction, FILTER_AND_ORDER_DEFAULT, Numbers } from 'src/app/shared/enums/enums';
import { FilterAndOrder, Fund } from 'src/app/shared/models/Fund';
import { ListFundService } from 'src/app/shared/services/observables/list-fund.service';
import { ButtonDirection, OptionSelect } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.scss']
})
export class ListFundsComponent {

  @Input() allFunds!: Fund[];
  @Input() allCategory!: OptionSelect<string>[];
  @Input() allAmount!: OptionSelect<number>[];
 
  readonly CATEGORY = Constants.CATEGORY;
  readonly CATEGORY_FILTER = Constants.CATEGORY_FILTER;
  readonly AMOUNT_FILTER = Constants.AMOUNT_FILTER;
  readonly SYMBOL = Constants.SYMBOL_PESOS;

  filterAndOrderData: FilterAndOrder = FILTER_AND_ORDER_DEFAULT;
  buttonDirection: ButtonDirection = Direction.ASC;

  constructor(private _fundServiceObservable: ListFundService ) {
    this.filterAndOrderData
  }

  changeStateDirection() {
    this.buttonDirection = (this.buttonDirection.text != Direction.ASC.text) ? 
      Direction.ASC : 
      Direction.DESC;

    this.updateDirection(this.buttonDirection.text);
  }

  updateListFind(filterAndOrderData: FilterAndOrder) {
    this._fundServiceObservable.updateObservableFund(filterAndOrderData);
  }
  
  updateFilterByCategory(value: string) {
    let newValue = value === Constants.NULL_VALUE_STRING ? 
      Constants.NULL_VALUE : 
      value;

    this.filterAndOrderData.category = newValue ;
    this.updateListFind(this.filterAndOrderData);
  }

  updateFilterByAmount(value: number) {
    let newValue = value === Numbers.NUM_ZERO ? 
      Constants.NULL_VALUE : 
      value;

    this.filterAndOrderData.maxAmount = newValue ;
    this.updateListFind(this.filterAndOrderData);
  }

  updateDirection(direction: string): void {
    this.filterAndOrderData.direction = direction;
    this.updateListFind(this.filterAndOrderData);
  }

}
