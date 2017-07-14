/**
 * Created by juanlopez on 13/07/17.
 */
/**
 * Created by juanlopez on 13/07/17.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteModalGe } from './delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gestion',
  templateUrl: './gestions.html',
  styleUrls: ['./gestions.scss']
})
export class Gestions {
  gestionData = [];
  private prov: string = '';

  constructor(private _routerA: ActivatedRoute, private modalService: NgbModal, private _router: Router) {
    for (let _i = 0; _i < 10; _i++) {
      this.gestionData.push({
        id: _i,
        name: 'Tigo post',
        endpoint: 'http://localhost:8080/api/providers',
        code: 'TIGOPOST'
      });
    }
  }

  ngOnInit() {
    this._routerA.params.subscribe(params => {
      this.prov = params['id'];
    });
  }

  private onPush() {
    this._router.navigate(['/pages/providers/editGestion/']);
  }

  private onUpdate(id) {
    this._router.navigate(['/pages/providers/editGestion/' + id]);
  }

  private onDelete(id) {
    const activeModal = this.modalService.open(DeleteModalGe, {
      size: 'sm',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Elimiar gestion';
    activeModal.componentInstance.titleBtn = 'Elimiar';
    activeModal.componentInstance.modalContent = 'Desea eliminar la gestion ' + id + '?';
  }

  private onConfig(id) {
    this._router.navigate(['/pages/providers/responses/' + id]);
  }
}
