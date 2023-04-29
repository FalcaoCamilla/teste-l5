import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class GenericUtil {

  constructor() { }

  public isNullOrUndefined(obj: any) {
    return typeof obj === "undefined" || obj === null;
  }

}
