/**
 * Created by juanlopez on 14/07/17.
 */
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./default-modal.component.scss')],
  templateUrl: './default-modal.component.html'
})

export class DefaultModalER implements OnInit {
  parameterInput: string = '';
  typeValue: string = '';
  valueDefault: string = '';
  valueReque: string = '';
  titleBtn: string = '';
  modalHeader: string;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  saveData() {

    this.closeModal();
  }
}
