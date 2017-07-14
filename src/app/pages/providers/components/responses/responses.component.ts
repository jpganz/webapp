/**
 * Created by juanlopez on 13/07/17.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalRes } from './delete-modal/delete-modal.component';

@Component({
  selector: 'responses',
  templateUrl: './responses.html',
  styleUrls: ['./responses.scss']
})
export class Responses {
  responsesData = [];
  private prov: string = '';

  constructor(private _routerA: ActivatedRoute, private modalService: NgbModal, private _router: Router) {
    for (let _i = 0; _i < 10; _i++) {
      this.responsesData.push({
        id: _i,
        type: 'Error',
        addRetry: true,
        sendEmail: false
      });
    }
  }

  ngOnInit() {
    this._routerA.params.subscribe(params => {
      this.prov = params['id'];
    });
  }

  private onPush() {
    this._router.navigate(['/pages/providers/editResponse/']);
  }

  private onUpdate(id) {
    this._router.navigate(['/pages/providers/editResponse/' + id]);
  }

  private onDelete(id) {
    const activeModal = this.modalService.open(DeleteModalRes, {
      size: 'sm',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = 'Elimiar response';
    activeModal.componentInstance.titleBtn = 'Elimiar';
    activeModal.componentInstance.modalContent = 'Desea eliminar el response ' + id + '?';
  }
  
}
