import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class ImageComponent{
  @Input() classImg: typeClass = '';
  @Input() pathImg = '';
}

export type typeClass = 'logo__header' | 'img_header' |'';
