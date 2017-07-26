/**
 * Created by edwinfranco on 17/07/17.
 */

export class TryParameterModel{

  public id: string;
  public requestId: string;
  public requestParameterId: string;
  public value: string;


  constructor(id: string, requestId: string, requestParameterId: string, value: string) {
    this.id = id;
    this.requestId = requestId;
    this.requestParameterId = requestParameterId;
    this.value = value;
  }
}
