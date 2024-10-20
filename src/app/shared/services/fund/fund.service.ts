import { Observable } from "rxjs";
import { IFundService } from "../../interface/IFundService";
import { Fund } from "../../models/Fund";
import { HttpClient } from "@angular/common/http";
import { Endpoints, environment } from "src/environments/environment";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class FundService implements IFundService {

    private _url = environment.BASE_URL + Endpoints.FUND;

    constructor(private _httpClient: HttpClient) {}
    
    getAllFund(): Observable<Fund[]> {
        return this._httpClient.get<Fund[]>(this._url);
    }
}