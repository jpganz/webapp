/**
 * Created by edwinfranco on 14/07/17.
 */

/**
 * Created by edwinfranco on 14/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import {ProfileModel} from '../profile';

@Injectable()
export class ProfileService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  getProfile_info(): Observable<ProfileModel> {
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROFILE, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProfileModel(res.activeProfiles,res.ribbonEnv);
      });
  }

}
