import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../../config';

@Injectable()
export class OauthService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  getToken(username: string, password: string): Observable<Response> {

    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let fd = new FormData();
    fd.append('username', username);
    fd.append('password', password);
    fd.append('grant_type', 'password');
    fd.append('client_secret', 'my-secret-token-to-change-in-production');
    fd.append('client_id', 'ovasapp');

    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API_OAUTH +
      AppConfig.API_TOKEN, fd, headers)
      .map((response: Response) => {
        return response;
      });
  }
}
