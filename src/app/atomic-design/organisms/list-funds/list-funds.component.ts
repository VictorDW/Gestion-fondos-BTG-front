import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/shared/enums/enums';
import { Fund } from 'src/app/shared/models/Fund';

@Component({
  selector: 'app-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.scss']
})
export class ListFundsComponent {

  @Input() allFunds!: Fund[];

  readonly CATEGORY = Constants.CATEGORY;
  readonly SYMBOL = Constants.SYMBOL_PESOS;
}
