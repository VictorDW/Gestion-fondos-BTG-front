import { Component, Input, OnInit } from '@angular/core';
import { Constants, FILTER_AND_ORDER_DEFAULT } from 'src/app/shared/enums/enums';
import { FilterAndOrder, Fund } from 'src/app/shared/models/Fund';
import { ListFundService } from 'src/app/shared/services/observables/list-fund.service';
import { OptionSelect, typeSelect } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.scss']
})
export class ListFundsComponent {

  @Input() allCategory!: OptionSelect<string>[];
  @Input() allFunds!: Fund[];

  readonly CATEGORY = Constants.CATEGORY;
  readonly CATEGORY_FILTER = Constants.CATEGORY_FILTER;
  readonly SYMBOL = Constants.SYMBOL_PESOS;

  filterAndOrderData: FilterAndOrder = FILTER_AND_ORDER_DEFAULT;

  constructor(private _fundServiceObservable: ListFundService ) {
    this.filterAndOrderData
  }

  
  updateFilterByCategory(value: string) {
    let newValue = value === Constants.NULL_VALUE_STRING ? 
      Constants.NULL_VALUE : 
      value;

    this.filterAndOrderData.category = newValue ;
    this.updateListFind(this.filterAndOrderData);
  }

  updateListFind(filterAndOrderData: FilterAndOrder) {
    this._fundServiceObservable.updateObservableFund(filterAndOrderData);
  }
}
