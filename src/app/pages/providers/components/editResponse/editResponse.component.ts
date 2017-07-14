/**
 * Created by juanlopez on 13/07/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'editResponse',
  templateUrl: './editResponse.html',
  styleUrls: ['./editResponse.scss']
})
export class EditResponse {
  typeResponse: string = '';
  limitRentry: string = '';
  timeRentry: string = '';
  valueReque: string = '';
  emailNoti: string = '';
  prov: string = '';
  headerData = [];
  bodyData = [];

  constructor() {
  }

  onPush() {
  }

  onPushHeader() {
  }

  onDeleteHeader() {
  }

  onPushBody() {
  }

  onDeleteBody() {
  }
}
