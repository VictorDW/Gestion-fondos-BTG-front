import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/shared/enums/enums';
import { Transaction } from 'src/app/shared/models/Client';

@Component({
  selector: 'app-list-transation',
  templateUrl: './list-transation.component.html',
  styleUrls: ['./list-transation.component.scss']
})
export class ListTransationComponent {

  @Input() allTransaction!: Array<Transaction>;

  obtainColorByType(type: string) {
    return type != 'Apertura' ?  
      'transaction__type--cancelation' : 
      'transaction__type--opening'
  }

  validateIfBalanceRemains(type: string) {
    return type != 'Apertura' ? 
    `${Constants.SYMBOL_PESOS} -` :
    `${Constants.SYMBOL_PESOS} `;
  }

}
