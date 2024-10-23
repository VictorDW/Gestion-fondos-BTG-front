import { Injectable } from "@angular/core";
import { IClientService, ITransactionService } from "../../interface/IClientService";
import { Observable } from "rxjs";
import { Client, Subscription, Subscribed, Transaction} from "../../models/Client";
import { environment, Endpoints, clientId } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class ClientService implements IClientService, ITransactionService {

  private _url = environment.BASE_URL + Endpoints.CLIENT + clientId;

  constructor(private _httpClient: HttpClient) {}

  getClientInfo(): Observable<Client> {
    return this._httpClient.get<Client>(this._url);
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this._httpClient.get<Transaction[]>(`${this._url}${Endpoints.TRANSACTION}`);
  }

  subscriptionFund(subscription: Subscription): Observable<void> {
    return this._httpClient.post<void>(`${this._url}${Endpoints.SUBSCRITION}`, subscription);
  }

  getFundsSubcrited(): Observable<Subscribed[]> {
    return this._httpClient.get<Subscribed[]>(`${this._url}${Endpoints.SUBSCRITEND}`)
  }

}