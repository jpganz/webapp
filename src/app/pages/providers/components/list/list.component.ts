/**
 * Created by juanlopez on 13/07/17.
 */
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';
import { DeleteModal } from './delete-modal/delete-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class List {

  providerData = [];

  constructor(private modalService: NgbModal, private _router: Router) {
    for (let _i = 0; _i < 10; _i++) {
      this.providerData.push({
        id: _i,
        name: 'Tigo post',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' +
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un ' +
        'impresor ',
        code: 'TIGOPOST'
      });
    }
  }

  private onPush() {
    const activeModal = this.modalService.open(DefaultModal, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Nuevo proveedor';
    activeModal.componentInstance.titleBtn = 'Guardar';
  }

  private onUpdate(id) {
    const activeModal = this.modalService.open(DefaultModal, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Editar proveedor';
    activeModal.componentInstance.titleBtn = 'Actualizar';
    activeModal.componentInstance.providerName = 'Juan';
    activeModal.componentInstance.providerCode = 'JL';
    activeModal.componentInstance.providerDesc = 'Lorem Ipsum es simplemente el texto de relleno';
  }

  private onDelete(id) {
    const activeModal = this.modalService.open(DeleteModal, {
      size: 'sm',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Elimiar proveedor';
    activeModal.componentInstance.titleBtn = 'Elimiar';
    activeModal.componentInstance.modalContent = 'Desea eliminar el proveedor ' + id + '?';
  }

  private onConfig(id) {
    this._router.navigate(['/pages/providers/gestion/' + id]);
  }
}
