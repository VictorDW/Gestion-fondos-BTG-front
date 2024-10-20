import { Observable } from "rxjs";
import { IFundService } from "../../interface/IFundService";
import { FilterAndOrder, Fund } from "../../models/Fund";
import { HttpClient } from "@angular/common/http";
import { Endpoints, environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Constants, Filters } from "../../enums/enums";


@Injectable({
    providedIn: "root"
})
export class FundService implements IFundService {

    private _url = environment.BASE_URL + Endpoints.FUND + Constants.QUESTION_MARK;

    constructor(private _httpClient: HttpClient) {}

    agregarfiltros(filterAndOrder: FilterAndOrder) {

        let url = Constants.EMPTY_STRING;

        if(filterAndOrder.category) {
            url += `&${Filters.CATEGORY}=${filterAndOrder.category}`
        }

        if(filterAndOrder.maxAmount) {
            url += `&${Filters.MAX_AMOUNT}=${filterAndOrder.maxAmount}`
        }

        return url;
    }

    getAllFund(filterAndOrder: FilterAndOrder): Observable<Fund[]> {
        const newUrl = this.agregarfiltros(filterAndOrder);
        return this._httpClient.get<Fund[]>(`${this._url}direction=${filterAndOrder.direction}${newUrl}`);
    }
}