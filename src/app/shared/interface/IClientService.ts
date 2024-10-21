import { Observable } from "rxjs";
import { Client, Transaction } from "../models/Client";

export abstract class IClientService {
  abstract getClientInfo(): Observable<Client>
}

export abstract class ITransactionService {
  abstract getAllTransactions(): Observable<Transaction[]>
}