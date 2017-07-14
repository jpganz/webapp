/**
 * Created by edwinfranco on 14/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import {CommandModel} from '../command';

@Injectable()
export class CommandService {
  commands: CommandModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(id: string, name: string): string{
    let body = JSON.stringify({
      'id' : id,
      'name' : name
    });
    return body;
  }

  getCommands(): Observable<CommandModel[]> {
    this.commands = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMAND, this.options)
      .map((response: Response) => {
        const res = response.json();
         res.forEach((item, index) => {
           this.commands.push(new CommandModel(item.id, item.name));
         });
         return this.commands;
      });
  }

  postCommands(id: string, name: string): Observable<CommandModel>{
    let body = this.createBody(id, name);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMAND, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new CommandModel(res.id, res.name);
    });
  }

  putCommands(id: string, name: string): Observable<CommandModel>{
    let body = this.createBody(id, name);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMAND, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new CommandModel(res.id, res.name);
      });
  }

  deleteCommands(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMAND+"/"+id,this.options)
      .map((response: Response) => {
        return response;
    });
  }

  getCommandsId(id: string): Observable<CommandModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMAND + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new CommandModel(res.id, res.name);
      });
  }
}
