import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, switchMap } from "rxjs";
import { Client } from "../../models/Client";
import { ClientService } from "../client/client.service";

@Injectable({
    providedIn: 'root'
})
export class ClientObservableService {

    private _clientSubject: BehaviorSubject<void>
    private _clientObservable$: Observable<Client>;

    constructor(private clientService: ClientService) {
        this._clientSubject = new BehaviorSubject<any>(null);
        this._clientObservable$ = this.getClientObservable();
    }

    private getClientObservable(): Observable<Client> {
       return this._clientSubject.asObservable().pipe(
        switchMap(() => this.clientService.getClientInfo())
       );
    }

    public updateObservableClient() {
        this._clientSubject.next();
    }

    public getObservableClient(): Observable<Client> {
        return this._clientObservable$;
    }
    
}