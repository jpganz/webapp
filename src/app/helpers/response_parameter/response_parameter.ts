/**
 * Created by edwinfranco on 14/07/17.
 */

export class ResponseParameterModel{
  public default_value: string;
  public id: string;
  public isMandatory: boolean;
  public name: string;
  public providerResponseId: string;
  public section: string;
  public type: string;


  constructor(default_value: string, id: string, isMandatory: boolean, name: string, providerResponseId: string, section: string, type: string) {
    this.default_value = default_value;
    this.id = id;
    this.isMandatory = isMandatory;
    this.name = name;
    this.providerResponseId = providerResponseId;
    this.section = section;
    this.type = type;
  }
}
