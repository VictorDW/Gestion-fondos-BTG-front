import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ITransactionService } from 'src/app/shared/interface/IClientService';
import { Transaction } from 'src/app/shared/models/Client';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  allTransaction!: Transaction[]

  constructor(private _transactionService: ITransactionService) {

    this._transactionService.getAllTransactions().pipe(
      map(transations => {
          this.allTransaction = transations;
          return transations;
        }
      )
    ).subscribe();
  }


}
