import {HeroesImg} from './heroes-img';

export interface HeroDisplay {
  name: string,
  level: number,
  maxLevel: number,
  village: string
  heroImg: HeroesImg | undefined
}
