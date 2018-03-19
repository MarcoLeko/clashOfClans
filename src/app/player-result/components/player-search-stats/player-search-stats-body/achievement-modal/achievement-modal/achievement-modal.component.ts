import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-achievement-modal',
  templateUrl: './achievement-modal.component.html',
  styleUrls: ['./achievement-modal.component.css']
})
export class AchievementModalComponent {

  @ViewChild('childModal') childModal: ModalDirective;

  open() {
    this.childModal.show();
  }
}
