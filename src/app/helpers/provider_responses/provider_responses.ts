/**
 * Created by edwinfranco on 14/07/17.
 */
export class ProviderResponsesModel {
  public addToRetry: boolean;
  public emailAddressToNotify: string;
  public emailNotify: string;
  public id: string;
  public providerCommandId: string;
  public type: string;


  constructor(addToRetry: boolean, emailAddressToNotify: string, emailNotify: string, id: string, providerCommandId: string, type: string) {
    this.addToRetry = addToRetry;
    this.emailAddressToNotify = emailAddressToNotify;
    this.emailNotify = emailNotify;
    this.id = id;
    this.providerCommandId = providerCommandId;
    this.type = type;
  }
}
