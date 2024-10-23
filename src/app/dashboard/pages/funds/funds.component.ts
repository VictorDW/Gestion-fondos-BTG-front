import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Constants, StyleButton } from 'src/app/shared/enums/enums';
import { Fund } from 'src/app/shared/models/Fund';
import { ClientObservableService } from 'src/app/shared/services/observables/client-observable.service';
import { ListFundService } from 'src/app/shared/services/observables/list-fund.service';
import { OptionSelect } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  nameClient!: string;
  availableBalance!: number
  allFunds!: Array<Fund>;
  optionsCategory: OptionSelect<string>[] = [];
  optionsAmount: OptionSelect<number>[] = [];
  isShowFrom = false;

  subscribeButton = StyleButton.SUBSCRITION;
  MESSAGE_WELCOME = Constants.MESSAGE_WELCOME;
  SYMBOL_PESOS = Constants.SYMBOL_PESOS
  COP = Constants.COP;

  constructor(
    private clientObservableService: ClientObservableService, 
    private fundServiceObservable: ListFundService
  ) {
    this.fillContentSelectCategory();
    this.fillContentSelectAmount();
  }

  ngOnInit(): void {

    this.clientObservableService.getObservableClient().pipe(
      map(client => {
          this.nameClient = client.name;
          this.availableBalance = client.availableBalance;
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
      {value: 'null', name: 'Sin filtro'},
      {value: 'FIC', name: "FIC"},
      {value: 'FPV', name: "FPV"}
    ]
  }

  private fillContentSelectAmount(): void {
    this.optionsAmount = [
      {value: 0, name: 'Sin filtro'},
      {value: 50000, name: '$ 50.000'},
      {value: 75000, name: '$ 75.000'},
      {value: 100000, name: '$ 100.000'},
      {value: 125000, name: '$ 125.000'},
      {value: 250000, name: '$ 250.000'}
    ]
  }

  changeStateFrom(): void {
    this.isShowFrom = !this.isShowFrom;
  }



}
