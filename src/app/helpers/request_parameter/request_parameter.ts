/**
 * Created by edwinfranco on 14/07/17.
 */

export class RequestParameterModel {

  public defaultValue: string;
  public id: string;
  public isMandatory: string;
  public name: string;
  public providerCommandId: string;
  public section: string;
  public type: string;


  constructor(defaultValue: string, id: string, isMandatory: string, name: string, providerCommandId: string, section: string, type: string) {
    this.defaultValue = defaultValue;
    this.id = id;
    this.isMandatory = isMandatory;
    this.name = name;
    this.providerCommandId = providerCommandId;
    this.section = section;
    this.type = type;
  }
}
