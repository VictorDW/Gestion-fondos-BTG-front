import { Observable } from "rxjs";
import { Client, Subscription, Subscribed, Transaction } from "../models/Client";

export abstract class IClientService {
  abstract getClientInfo(): Observable<Client>
  abstract subscriptionFund(subscription: Subscription): Observable<void>
  abstract getFundsSubcrited(): Observable<Subscribed[]>
}

export abstract class ITransactionService {
  abstract getAllTransactions(): Observable<Transaction[]>
}