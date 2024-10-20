import { Observable } from "rxjs";
import { Fund } from "../models/Fund";

export abstract class IFundService {
    abstract getAllFund(): Observable<Fund[]>
}