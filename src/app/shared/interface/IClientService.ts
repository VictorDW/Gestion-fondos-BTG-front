import { Observable } from "rxjs";
import { Client } from "../models/Client";

export abstract class IClientService {
  abstract getClientInfo(): Observable<Client>
}