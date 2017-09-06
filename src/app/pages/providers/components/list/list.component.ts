/**
 * Created by juanlopez on 13/07/17.
 */
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';
import { DeleteModal } from './delete-modal/delete-modal.component';
import { Router } from '@angular/router';
import { ProvidersService } from '../../../../helpers/providers/service/providers.service';
import { SessionAuthService } from '../../../../helpers/sessionAuth/sessionAuth.service';

@Component({
  selector: 'list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
  providers: [ProvidersService, SessionAuthService]
})
export class List {

  providerData = [];

  constructor(private modalService: NgbModal, private _router: Router,
              private _prov: ProvidersService, private _session: SessionAuthService) {
  }

  ngOnInit() {
    this._session.validateSession();
    this._prov.getProviders().subscribe(res => {
      for (let entry of res) {
        this.providerData.push({
          id: entry.id,
          name: entry.name,
          description: entry.description,
          code: entry.code
        });
      }
    });
  }


  onPush() {
    const activeModal = this.modalService.open(DefaultModal, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Nuevo proveedor';
    activeModal.componentInstance.titleBtn = 'Guardar';
    let providerName = activeModal.componentInstance.providerName;
    let providerCode = activeModal.componentInstance.providerCode;
    let providerDesc = activeModal.componentInstance.providerDesc;
    console.log(providerName);
  }

  onLinkClick($event: any) {
    console.log($event);
  }


  onUpdate(id) {
    const activeModal = this.modalService.open(DefaultModal, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Editar proveedor';
    activeModal.componentInstance.titleBtn = 'Actualizar';
    let provider: any = this.providerData.find(x => x.id === id);
    activeModal.componentInstance.providerName = provider.name;
    activeModal.componentInstance.providerCode = provider.code;
    activeModal.componentInstance.providerDesc = provider.description;
  }

  onDelete(id) {
    const activeModal = this.modalService.open(DeleteModal, {
      size: 'sm',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Elimiar proveedor';
    let provider: any = this.providerData.find(x => x.id === id);
    activeModal.componentInstance.titleBtn = 'Elimiar';
    activeModal.componentInstance.modalContent = 'Desea eliminar el proveedor ' + provider.name + '?';
  }

  onConfig(id) {
    this._router.navigate(['/pages/providers/gestion/' + id]);
  }
}
