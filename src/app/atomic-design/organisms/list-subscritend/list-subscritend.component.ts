import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/shared/enums/enums';
import { Subscribed } from 'src/app/shared/models/Client';

@Component({
  selector: 'app-list-subscritend',
  templateUrl: './list-subscritend.component.html',
  styleUrls: ['./list-subscritend.component.scss']
})
export class ListSubscritendComponent {

  @Input() subscribeds!: Subscribed[];

  SYMBOL_PESOS = Constants.SYMBOL_PESOS;
}
