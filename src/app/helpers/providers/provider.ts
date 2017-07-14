/**
 * Created by juanlopez on 12/07/17.
 */
export class ProviderModel {
  public id: string;
  public name: string;
  public description: string;
  public code: string;

  constructor(id: string, name: string, description: string, code: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.code = code;
  }
}
