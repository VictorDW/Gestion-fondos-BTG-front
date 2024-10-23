import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, switchMap } from "rxjs";
import { FilterAndOrder, Fund } from "../../models/Fund";
import { FundService } from "../fund/fund.service";
import { FILTER_AND_ORDER_DEFAULT } from "../../enums/enums";

@Injectable({
    providedIn: 'root'
})
export class ListFundService {

    private _fundSubject!: BehaviorSubject<FilterAndOrder>
    private _fundObservable$!: Observable<Fund[]>;

    constructor(private _fundService: FundService){
        this._fundSubject = new BehaviorSubject<FilterAndOrder>(FILTER_AND_ORDER_DEFAULT);
        this._fundObservable$ = this.getFundObservable();
    }

    private getFundObservable(): Observable<Fund[]> {
        return this._fundSubject.asObservable().pipe(
            switchMap((filterAndOrderData) => this._fundService.getAllFund(filterAndOrderData))
        );
    }

    public updateObservableFund(filterAndOrderData: FilterAndOrder) {
        this._fundSubject.next(filterAndOrderData);
    }

    public getObservableFund(): Observable<Fund[]>  {
        return this._fundObservable$;
    }


}