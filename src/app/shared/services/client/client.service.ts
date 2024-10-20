import { Injectable } from "@angular/core";
import { IClientService } from "../../interface/IClientService";
import { Observable } from "rxjs";
import { Client } from "../../models/Client";
import { environment, Endpoints, clientId } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class ClientService implements IClientService{

  private _url = environment.BASE_URL + Endpoints.CLIENT + clientId;

  constructor(private _httpClient: HttpClient) {}

  getClientInfo(): Observable<Client> {
    return this._httpClient.get<Client>(this._url);
  }

}