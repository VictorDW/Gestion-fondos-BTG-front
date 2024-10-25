import { Component } from '@angular/core';
import { PathImages } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  pathImg = PathImages.IMG_USER;
  pathLogo = PathImages.LOGO

  constructor() {}

}
