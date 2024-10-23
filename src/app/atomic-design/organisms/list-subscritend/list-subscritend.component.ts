import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/shared/enums/enums';
import { Subscribed } from 'src/app/shared/models/Client';
import { SubscribedObservableService } from 'src/app/shared/services/observables/subscribed-observable.service';

@Component({
  selector: 'app-list-subscritend',
  templateUrl: './list-subscritend.component.html',
  styleUrls: ['./list-subscritend.component.scss']
})
export class ListSubscritendComponent {

  @Input() subscribeds!: Subscribed[];

  SYMBOL_PESOS = Constants.SYMBOL_PESOS;

  constructor(private _unsuscribedObservable: SubscribedObservableService) {}

  unsubscribedFund(fundId: number) {
    this._unsuscribedObservable.cancelFund(fundId);
  }
}
