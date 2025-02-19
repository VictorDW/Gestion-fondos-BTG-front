import { Component, Input } from '@angular/core';
import { buttonStructure } from 'src/app/shared/types/types-component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent{
  @Input() disabled: boolean = false;
  @Input() itemButton!: buttonStructure;

  get isDisabled() {
    return this.disabled
  }
}
