import { Data } from "@angular/router";

export interface Client {
  id: string;
  name: string;
  availableBalance: number;
}

export interface Transaction {
  id: string
  nameFund: string,
  type: string,
  mount: number,
  dateRegistration: string
}