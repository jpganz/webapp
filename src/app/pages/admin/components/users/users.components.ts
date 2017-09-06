/**
 * Created by edwinfranco on 26/07/17.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionAuthService } from '../../../../helpers/sessionAuth/sessionAuth.service';
import { UserService } from '../../../../helpers/user/service/user.service';
import { UserModel } from '../../../../helpers/user/user';
import { DefaultModalUser } from './default-modal/default-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
export class UsersComponents {
  public usersData: UserModel[] = [];

  constructor(private _router: Router, private _session: SessionAuthService,
              private _user: UserService, private modalService: NgbModal) {
    // this._session.validateSession();
  }

  ngOnInit() {
    this._user.getUsers().subscribe(rest => {
      this.usersData = rest;
    }, err => {
      this._session.logout();
    });
  }

  onPush() {
    const activeModal = this.modalService.open(DefaultModalUser, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Nuevo rol';
    activeModal.componentInstance.titleBtn = 'Guardar';
  }
}
