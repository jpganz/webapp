/**
 * Created by edwinfranco on 14/07/17.
 */

export class ProviderCommandModel {

  public id: string;
  public providerCommandId: string;
  public requestId: string;

  constructor(id: string, providerCommmand: string, requestId: string) {
    this.id = id;
    this.providerCommandId = providerCommmand;
    this.requestId = requestId;
  }
}
