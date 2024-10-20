import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IClientService } from 'src/app/shared/interface/IClientService';
import { Fund } from 'src/app/shared/models/Fund';
import { ListFundService } from 'src/app/shared/services/observables/list-fund.service';
import { OptionSelect } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  nameClient!: string;
  allFunds!: Array<Fund>;
  optionsCategory: OptionSelect<string>[] = [];

  constructor(private clientService: IClientService, private fundServiceObservable: ListFundService) {
    this.fillContentSelectCategory();
  }

  ngOnInit(): void {

    this.clientService.getClientInfo().pipe(
      map(client => {
          this.nameClient = client.name;
          return client;
      })
    ).subscribe();

    this.fundServiceObservable.getObservableFund().pipe(
        map(funds => {
            this.allFunds = funds;
            return funds
        })
      ).subscribe();
  }

  private fillContentSelectCategory(): void {
    this.optionsCategory = [
      {value: 'null', name: 'sin filtro'},
      {value: 'FIC', name: "FIC"},
      {value: 'FPV', name: "FPV"}
    ]
  }



}
