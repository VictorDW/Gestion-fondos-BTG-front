import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, switchMap } from "rxjs";
import { Subscribed } from "../../models/Client";
import { ClientService } from "../client/client.service";

@Injectable({
    providedIn: 'root'
})
export class SubscribedObservableService {
    
    private _subscribedBehavior: BehaviorSubject<void>;
    private _subscribedObservable$: Observable<Subscribed[]>;

    constructor(private clientService: ClientService) {
        this._subscribedBehavior = new BehaviorSubject<any>(null);
        this._subscribedObservable$ = this.getSubscritend();
    }

    private getSubscritend(): Observable<Subscribed[]> {
        return this._subscribedBehavior.asObservable().pipe(
            switchMap(() => this.clientService.getFundsSubcrited())
        );
    }

    public updateObservableSubscribed() {
        this._subscribedBehavior.next();
    }

    public cancelFund(fundId: number) {
        this.clientService
        .unsubcriptionFund(fundId)
        .subscribe(() =>
            this.updateObservableSubscribed()
        );
    }

    public getObservableSubscribed(): Observable<Subscribed[]> {
        return this._subscribedObservable$;
    }
}