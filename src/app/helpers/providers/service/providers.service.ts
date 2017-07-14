/**
 * Created by juanlopez on 12/07/17.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

import {AppConfig} from "../../../config";
import {ProviderModel} from "../provider";

@Injectable()
export class ProvidersService {
  providers: ProviderModel[] = [];

  constructor(private http: Http) {
  }

  getProviders(): Observable<ProviderModel[]> {
    this.providers = [];

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER, options)
      .map((response: Response) => {
        response.json().data.forEach((item, index) => {
          this.providers.push(new ProviderModel(item.id, item.attributes.name, item.attributes.description, item.attributes.name_othe));
        });
        return this.providers;
      });
  }
}
