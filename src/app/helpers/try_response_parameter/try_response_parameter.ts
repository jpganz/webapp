/**
 * Created by edwinfranco on 17/07/17.
 */

export class TryResposeParameterModel{

  public id: string;
  public requestTryId: string;
  public responseParameterId: string;
  public value: string;


  constructor(id: string, requestTryId: string, responseParameterId: string, value: string) {
    this.id = id;
    this.requestTryId = requestTryId;
    this.responseParameterId = responseParameterId;
    this.value = value;
  }
}
