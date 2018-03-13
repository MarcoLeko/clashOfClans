import { Injectable } from '@angular/core';
import { TownhallImgSrc } from './townhall-src';

@Injectable()
export class TownhallPictureService {

  getTownHallPicture(townhall: number): string {
    let townhallSrc: string;

    switch(townhall) {
      case 1:
        townhallSrc = TownhallImgSrc.TOWNHALL_ONE;
        break;
      case 2:
        townhallSrc = TownhallImgSrc.TOWNHALL_TWO;
        break;
        case 3:
        townhallSrc = TownhallImgSrc.TOWNHALL_THREE;
        break;
      case 4:
        townhallSrc = TownhallImgSrc.TOWNHALL_FOUR;
        break;
      case 5:
        townhallSrc = TownhallImgSrc.TOWNHALL_FIVE;
        break;
      case 6:
        townhallSrc = TownhallImgSrc.TOWNHALL_SIX;
        break;
      case 7:
        townhallSrc = TownhallImgSrc.TOWNHALL_SEVEN;
        break;
      case 8:
        townhallSrc = TownhallImgSrc.TOWNHALL_EIGHT;
        break;
      case 9:
        townhallSrc = TownhallImgSrc.TOWNHALL_NINE;
        break;
      case 10:
        townhallSrc = TownhallImgSrc.TOWNHALL_TEN;
        break;
      case 11:
        townhallSrc = TownhallImgSrc.TOWNHALL_ELEVEN;
        break;
      default:
        break;
    }
    return townhallSrc;
  }
}
