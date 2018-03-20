import { Injectable } from '@angular/core';
import { BuilderInfoType } from './builder-info.type';
import { Builderhall } from './builder-hall';


@Injectable()
export class BuilderInfoService {

  getBuilderInfoType(base: string): BuilderInfoType {
    let builderInfo: BuilderInfoType;
    if (base === 'builderBase') {
      builderInfo = {
        builderhall: Builderhall.BUILDERHALL_BASE,
        imgSrc: 'assets/builder_master.png'
      };
      return builderInfo;
    } else {
      builderInfo = {
        builderhall: Builderhall.TOWNHALL_BASE,
        imgSrc: 'assets/builder.png'
      };
      return builderInfo;
    }
  }
}
