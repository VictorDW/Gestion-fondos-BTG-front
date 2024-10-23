
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

export interface Subscription {
  fundId: number,
  investmentAmount: number
}

export interface Subscribed extends Subscription{
  name: string
}