/**
 * Created by edwinfranco on 17/07/17.
 */

export class ServiceSecurityModel{

  public communicationStandardId: string;
  public id: string;
  public name: string;


  constructor(communicationStandardId: string, id: string, name: string) {
    this.communicationStandardId = communicationStandardId;
    this.id = id;
    this.name = name;
  }
}
