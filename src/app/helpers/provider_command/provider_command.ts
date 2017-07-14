/**
 * Created by edwinfranco on 14/07/17.
 */
export class ProviderCommandModel {

  public code: string;
  public commandId: string;
  public communicationStandardId: string;
  public endPointUrl: string;
  public id: string;
  public providerId: string;
  public retryInterval: string;
  public retryLimit: string;
  public serviceSecurityId: string;

  constructor(code: string, commandId: string, communicationStandardId: string, endPointUrl: string, id: string, providerId: string, retryInterval: string, retryLimit: string, serviceSecurityId: string) {
    this.code = code;
    this.commandId = commandId;
    this.communicationStandardId = communicationStandardId;
    this.endPointUrl = endPointUrl;
    this.id = id;
    this.providerId = providerId;
    this.retryInterval = retryInterval;
    this.retryLimit = retryLimit;
    this.serviceSecurityId = serviceSecurityId;
  }
}
