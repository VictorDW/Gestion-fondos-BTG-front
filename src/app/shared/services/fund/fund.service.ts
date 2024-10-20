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

    agregarfiltros(url: string, filterAndOrder: FilterAndOrder) {

        if(filterAndOrder.category) {
            url += `&${Filters.CATEGORY}=${filterAndOrder.category}`
        }

        if(filterAndOrder.maxAmount) {
            url += `&${Filters.MAX_AMOUNT}=${filterAndOrder.maxAmount}`
        }

        return url;
    }

    getAllFund(filterAndOrder: FilterAndOrder): Observable<Fund[]> {
        const newUrl = this.agregarfiltros(this._url, filterAndOrder);
        return this._httpClient.get<Fund[]>(newUrl);
    }
}