import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/enums/enums';
import { Fund } from 'src/app/shared/models/Fund';
import { OptionSelect, typeSelect } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.scss']
})
export class ListFundsComponent {

  @Input() allCategory!: OptionSelect<string | null>[];
  @Input() allFunds!: Fund[];

  readonly CATEGORY = Constants.CATEGORY;
  readonly CATEGORY_FILTER = Constants.CATEGORY_FILTER;
  readonly SYMBOL = Constants.SYMBOL_PESOS;

  updateFilterByCategory(value: typeSelect ) {
    console.log(value);
  }
}
