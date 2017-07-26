/**
 * Created by edwinfranco on 14/07/17.
 */
export class ProfileModel {

  public activeProfiles: string[];
  public ribbonEnv: string;

  constructor(active: string[], ribb: string) {
    this.activeProfiles = active;
    this.ribbonEnv      = ribb;
  }
}
