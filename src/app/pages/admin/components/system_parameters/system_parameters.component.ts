/**
 * Created by edwinfranco on 26/07/17.
 */

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'system',
  templateUrl: './system_parameters.html',
  styleUrls: ['./system_parameters.scss']
})
export class Systemparameters {

  horas:number[];
  tipoSeguridad: string[];
  sysParameter = {
    SMTP:{},
    FTP:{}
  };

  constructor(private _router: Router) {
    console.log('hola mundo');
    this.horas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    this.tipoSeguridad = ['SSL', 'TLS'];
  }

  saveParemeters(){
    // ENVIAR LOS DATOS
    //console.log(this.sysParameter);
    //this.clearParameters();
  }

  clearParameters(){
    this.sysParameter = {
      SMTP:{},
      FTP:{}
    };
  }

}
