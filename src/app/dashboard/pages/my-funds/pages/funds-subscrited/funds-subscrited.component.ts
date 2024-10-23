import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IClientService } from 'src/app/shared/interface/IClientService';
import { Subscribed } from 'src/app/shared/models/Client';

@Component({
  selector: 'app-funds-subscrited',
  templateUrl: './funds-subscrited.component.html',
  styleUrls: ['./funds-subscrited.component.scss']
})
export class FundsSubscritedComponent {

  allSubscribed!: Subscribed[];

  constructor(private _clientService: IClientService) {

    this._clientService.getFundsSubcrited().pipe(
      map(subscrited => {
        this.allSubscribed = subscrited;
        return subscrited;
      })
    ).subscribe();
  }

}
