import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IClientService } from 'src/app/shared/interface/IClientService';
import { Subscribed } from 'src/app/shared/models/Client';
import { SubscribedObservableService } from 'src/app/shared/services/observables/subscribed-observable.service';

@Component({
  selector: 'app-funds-subscrited',
  templateUrl: './funds-subscrited.component.html',
  styleUrls: ['./funds-subscrited.component.scss']
})
export class FundsSubscritedComponent {

  allSubscribed!: Subscribed[];

  constructor(private _fundSubscrited: SubscribedObservableService) {

    this._fundSubscrited.getObservableSubscribed().pipe(
      map(subscrited => {
        this.allSubscribed = subscrited;
        return subscrited;
      })
    ).subscribe();
  }

}
