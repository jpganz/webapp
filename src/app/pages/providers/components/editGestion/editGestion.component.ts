/**
 * Created by juanlopez on 13/07/17.
 */
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalG } from './delete-modal/delete-modal.component';
import { DefaultModalG } from './default-modal/default-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'editGestion',
  templateUrl: './editGestion.html',
  styleUrls: ['./editGestion.scss']
})
export class EditGestion {
  prov: string = '';
  headerData = [];
  bodyData = [];
  parameterInput: string = '';
  typeValue: string = '';
  valueDefault: string = '';
  valueReque: boolean = false;

  constructor(private modalService: NgbModal, private _routerA: ActivatedRoute, private _router: Router) {
    for (let _i = 0; _i < 5; _i++) {
      this.headerData.push({
        id: _i,
        name: 'name',
        type: 'string',
        value: 'TIGOPOST',
        required: true,
      });
      this.bodyData.push({
        id: _i,
        name: 'name',
        type: 'string',
        value: 'TIGOPOST',
        required: false,
      });
    }
  }

  ngOnInit() {
    this._routerA.params.subscribe(params => {
      this.prov = params['id'];
    });
  }

  private onPush() {
    if (this.prov) {
      this._router.navigate(['/pages/providers/gestion/' + this.prov]);
    } else {
      this._router.navigate(['/pages/providers/gestion/']);
    }

  }

  private onPushHeader() {
    const activeModal = this.modalService.open(DefaultModalG, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Nuevo parametro de header';
    activeModal.componentInstance.titleBtn = 'Guardar';
  }

  private onPushBody() {
    const activeModal = this.modalService.open(DefaultModalG, {
      size: 'lg',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Nuevo parametro de body';
    activeModal.componentInstance.titleBtn = 'Guardar';
  }

  private onDeleteHeader(id) {
    const activeModal = this.modalService.open(DeleteModalG, {
      size: 'sm',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Elimiar parametro';
    activeModal.componentInstance.titleBtn = 'Elimiar';
    activeModal.componentInstance.modalContent = 'Desea eliminar el parametro ' + id + '?';
  }

  private onDeleteBody(id) {
    const activeModal = this.modalService.open(DeleteModalG, {
      size: 'sm',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Elimiar parametro';
    activeModal.componentInstance.titleBtn = 'Elimiar';
    activeModal.componentInstance.modalContent = 'Desea eliminar el parametro ' + id + '?';
  }
}
