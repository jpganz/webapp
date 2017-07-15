/**
 * Created by edwinfranco on 14/07/17.
 */

export class RequestModel{

  public annexedNumber: number;
  public clientName: string;
  public clientNumber: number;
  public dateTime: string;
  public eventConfirmation: string;
  public id: string;
  public nextTryBy: string;
  public requestAmount: number;
  public requestStatus: number;
  public serviceCode: string;
  public statusRequested: string;


  constructor(annexedNumber: number, clientName: string, clientNumber: number, dateTime: string, eventConfirmation: string, id: string, nextTryBy: string, requestAmount: number, requestStatus: number, serviceCode: string, statusRequested: string) {
    this.annexedNumber = annexedNumber;
    this.clientName = clientName;
    this.clientNumber = clientNumber;
    this.dateTime = dateTime;
    this.eventConfirmation = eventConfirmation;
    this.id = id;
    this.nextTryBy = nextTryBy;
    this.requestAmount = requestAmount;
    this.requestStatus = requestStatus;
    this.serviceCode = serviceCode;
    this.statusRequested = statusRequested;
  }
}
