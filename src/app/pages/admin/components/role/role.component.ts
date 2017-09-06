/**
 * Created by edwinfranco on 26/07/17.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionAuthService } from '../../../../helpers/sessionAuth/sessionAuth.service';
import { DefaultModalRole } from './default-modal/default-modal.component';

@Component({
  selector: 'role',
  templateUrl: './role.html',
  styleUrls: ['./role.scss']
})
export class RoleComponent {

  private tk: string = '';


  constructor(private modalService: NgbModal, private _router: Router,
              private _session: SessionAuthService) {
  }

  onPush() {
    const activeModal = this.modalService.open(DefaultModalRole, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Nuevo rol';
    activeModal.componentInstance.titleBtn = 'Guardar';
  }

}
