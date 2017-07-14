/**
 * Created by juanlopez on 14/07/17.
 */
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal-delete',
  styleUrls: [('./delete-modal.component.scss')],
  templateUrl: './delete-modal.component.html'
})

export class DeleteModalGe implements OnInit {
  titleBtn: string = '';
  modalHeader: string;
  modalContent: string;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  deleteData() {
    this.closeModal();
  }
}
