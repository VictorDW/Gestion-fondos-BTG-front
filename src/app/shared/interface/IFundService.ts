import { Observable } from "rxjs";
import { FilterAndOrder, Fund } from "../models/Fund";

export abstract class IFundService {
    abstract getAllFund(filterAndOrderData: FilterAndOrder): Observable<Fund[]>
    abstract getAllFundWithout(): Observable<Fund[]>; 
}