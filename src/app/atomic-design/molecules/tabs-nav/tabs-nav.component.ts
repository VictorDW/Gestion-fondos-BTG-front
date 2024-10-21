import { Component} from '@angular/core';
import { navStructure } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrls: ['./tabs-nav.component.scss']
})
export class TabsNavComponent {

  tabs: navStructure[] = [];

  constructor() {
    this.tabs =[{
      _href:'transactions',
      _link: {
        _title: 'Transacciones'
      }
    },{
      _href:'subscriptions',
      _link: {
        _title: 'Subcripciones'
      }
    }];
   }

}
