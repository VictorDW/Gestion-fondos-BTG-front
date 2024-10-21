import { Component } from '@angular/core';
import { navStructure } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  navItems: navStructure[];

  constructor() {

    this.navItems = [
      {
        _href: '/dashboard/funds',
        _link: {
          _title: 'Fondos', 
        }
      },
      {
        _href: '/dashboard/my-funds',
        _link: {
          _title: 'Mis suscripciones',
        }
      }
    ]
   }

}
