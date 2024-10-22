import { Observable } from "rxjs";
import { Client, Subscription, Transaction } from "../models/Client";

export abstract class IClientService {
  abstract getClientInfo(): Observable<Client>
  abstract subscriptionFund(subscription: Subscription): Observable<void>
}

export abstract class ITransactionService {
  abstract getAllTransactions(): Observable<Transaction[]>
}