/**
 * Created by edwinfranco on 13/07/17.
 */
export class AccountModel {

  public id: string;
  public login: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public imageUrl: string;
  public activated: boolean;
  public langKey: string;
  public createdBy: string;
  public createdDate: string;
  public lastModifiedBy: string;
  public lastModifiedDate: string;
  public authorities: string[];



  constructor(id: string, login: string, firstName: string, lastName: string, email: string,
              imageUrl: string, activated: boolean, langKey: string, createdBy: string,
              createdDate: string, lastModifiedBy: string, lastModifiedDate: string, authorities: string[]) {
    this.id = id;
    this.login = login;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.imageUrl = imageUrl;
    this.activated = activated;
    this.langKey = langKey;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.lastModifiedBy = lastModifiedBy;
     this.lastModifiedDate = lastModifiedDate;
    this.authorities = authorities;
  }
}
