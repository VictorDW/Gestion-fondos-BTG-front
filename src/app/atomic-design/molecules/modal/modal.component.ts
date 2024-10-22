import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Constants, StyleButton } from 'src/app/shared/enums/enums';
import { buttonStructure } from 'src/app/shared/types/types-component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() titleModal: string = Constants.EMPTY_STRING;
  @Input() icon!: string;
  @Output() closeModal = new EventEmitter<void>();

  itemButton!: buttonStructure;

  constructor() { 
    this.itemButton = StyleButton.SUSSESS;
  }

  OncloseModal(): void {
    this.closeModal.emit();
  }


}
