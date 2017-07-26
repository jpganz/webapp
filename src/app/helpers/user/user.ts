/**
 * Created by edwinfranco on 17/07/17.
 */

export class UserModel{

  public activated: boolean;
  public authorities: string[];
  public createdBy: string;
  public createdDate: string;
  public email: string;
  public firstName: string;
  public id: string;
  public imageUrl: string;
  public langKey: string;
  public lastModifiedBy: string;
  public lastModifiedDate: string;
  public lastName: string;
  public login: string;


  constructor(activated: boolean, authorities: string[], createdBy: string, createdDate: string, email: string, firstName: string, id: string, imageUrl: string, langKey: string, lastModifiedBy: string, lastModifiedDate: string, lastName: string, login: string) {
    this.activated = activated;
    this.authorities = authorities;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.email = email;
    this.firstName = firstName;
    this.id = id;
    this.imageUrl = imageUrl;
    this.langKey = langKey;
    this.lastModifiedBy = lastModifiedBy;
    this.lastModifiedDate = lastModifiedDate;
    this.lastName = lastName;
    this.login = login;
  }
}
