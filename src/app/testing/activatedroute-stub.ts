import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivatedRouteStub {

  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  private _testParamMap: ParamMap;

  get testParamMap() {
    return this._testParamMap;
  }

}
