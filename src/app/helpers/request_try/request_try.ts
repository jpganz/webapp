/**
 * Created by edwinfranco on 14/07/17.
 */

export class RequestTryModel{

  public id: string;
  public requestId: string;
  public status: number;


  constructor(id: string, requestId: string, status: number) {
    this.id = id;
    this.requestId = requestId;
    this.status = status;
  }
}
