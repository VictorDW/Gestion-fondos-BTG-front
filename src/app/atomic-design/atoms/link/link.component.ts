import { Component, Input } from '@angular/core';
import { linkStructure } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {

  @Input() itemNav!: linkStructure;
  @Input() classLink!: string;
  @Input() classIcon!: string;

}
