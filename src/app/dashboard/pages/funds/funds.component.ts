import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IClientService } from 'src/app/shared/interface/IClientService';
import { IFundService } from 'src/app/shared/interface/IFundService';
import { Fund } from 'src/app/shared/models/Fund';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  nameClient!: string;
  allFunds!: Array<Fund>;

  constructor(private clientService: IClientService, private fundService: IFundService) {}

  ngOnInit(): void {

    this.clientService.getClientInfo().pipe(
      map(client => {
          this.nameClient = client.name;
          return client;
      })
    ).subscribe();

    this.fundService.getAllFund().pipe(
      map(funds => {
          this.allFunds = funds;
          return funds
      })
    ).subscribe();
  }



}
