import {AchievementType, PlayerByPlayerTagType} from '../../generated/types';
import {Heroes} from '../player-result/services/hero-mapper/heroes';
import {HeroDisplay} from '../player-result/services/hero-mapper/hero-display';
import {HeroesImg} from '../player-result/services/hero-mapper/heroes-img';
import {BuilderInfoType} from '../player-result/services/builder-info/builder-info.type';
import {Builderhall} from '../player-result/services/builder-info/builder-hall';
import {TroopsHomeAttackStats} from '../player-result/services/troops-and-spells-mapper/home/troops-home-attack-stats.type';

export class Mocks {
  public static PLAYERTAG: string = '#9P9UG92CG';
  public static PLAYERSTATSBYPLAYERTAG: PlayerByPlayerTagType = {
    tag: '#9P9UG92CG',
    name: 'Papastadoupoulos',
    expLevel: 132,
    league: {
      id: 8,
      name: 'Champions League III',
      iconUrls: {
        small: 'http://api.coc.iconurl.small/',
        tiny: 'http://api.coc.iconurl.large/',
        medium: 'http://api.coc.iconurl.medium/'
      }
    },
    trophies: 3319,
    versusTrophies: 4010,
    attackWins: 9,
    defenseWins: 27,
    clan: {
      clanLevel: 20,
      tag: '#87878989',
      name: 'Wolfsrudel',
      badgeUrls: {
        small: 'http://api.coc.badgeurl.small/',
        large: 'http://api.coc.badgeurl.large/',
        medium: 'http://api.coc.badgeurl.medium/'
      }
    },
    bestTrophies: 4265,
    donations: 12890,
    donationsReceived: 6000,
    warStars: 650,
    role: 'elder',
    townHallLevel: 9,
    builderHallLevel: 7,
    bestVersusTrophies: 4700,
    versusBattleWins: 987,
    legendStatistics: {
      legendTrophies: 0,
      currentSeason: {
        rank: 9999,
        trophies: 0,
        id: '#jgasjlfkd'
      },
      previousSeason: {
        rank: 23,
        trophies: 2700,
        id: '#fdjglkdj'
      },
      bestSeason: {
        rank: 89,
        trophies: 8945,
        id: '#jfglk'
      },
    },
    achievements: [
      {
        name: 'marco',
        stars: 999,
        value: 99,
        target: 76,
        info: 'no info',
        village: 'xxx_master_of_desaster_xxx'
      }
    ],
    troops: [
      {
        name: 'barbarian',
        level: 6,
        maxLevel: 7,
        village: 'home'
      }, {
        name: 'Raged Barbarian',
        level: 14,
        maxLevel: 16,
        village: 'builderBase'
      }
    ],
    heroes: [
      {
        name: Heroes.BARBARIAN_KING,
        level: 23,
        maxLevel: 50,
        village: 'kjfsölksd'
      },
      {
        name: Heroes.ARCHER_QUEEN,
        level: 45,
        maxLevel: 50,
        village: 'kjfsölksd'
      },
      {
        name: Heroes.GRAND_WARDEN,
        level: 18,
        maxLevel: 50,
        village: 'kjfsölksd'
      }, {
        name: Heroes.BATTLE_MACHINE,
        level: 25,
        maxLevel: 50,
        village: 'kjfsölksd'
      }
    ],
    spells: [
      {
        name: 'Rage Spell',
        level: 5,
        maxLevel: 5,
        village: 'home'
      }
    ]
  };

  public static CLANTAG: string = '#90899878';

  // public static CLANSTATSBYCLANTAG: ClansByClantagType = {
  //   tag: '#90899878',
  //   name: 'wolfsrudel',
  //   badgeUrls: {
  //     small: 'http://api.coc.badgeurl.small/',
  //     large: 'http://api.coc.badgeurl.large/',
  //     medium: 'http://api.coc.badgeurl.medium/'
  //   },
  //   location: {
  //     id: 99,
  //     name: 'Germany',
  //     isCountry: true
  //   },
  //   clanLevel: 20,
  //   clanPoints: 17600,
  //   clanVersusPoints: 16000,
  //   members: 50,
  //   type: 'open',
  //   requiredTrophies: 2200,
  //   warFrequency: 'always',
  //   warWinStreak: 16,
  //   warWins: 387,
  //   isWarLogPublic: true,
  //   description: 'Dont make it rain, make it hurricane',
  //   memberList: [{
  //     tag: '#80QOVPL9C',
  //     name: 'placeholder',
  //     expLevel: 187,
  //     league: {
  //       id: 88,
  //       name: 'Legend League',
  //       iconUrls: {
  //         small: 'http://api.coc.iconurl.small/',
  //         tiny: 'http://api.coc.iconurl.large/',
  //         medium: 'http://api.coc.iconurl.medium/'
  //       },
  //       trophies: 2700,
  //       versusTrophies: 4000,
  //       role: 'leader',
  //       clanRank: 17,
  //       previousClanRank: 16,
  //       donations: 98,
  //       donationsReceived: 999
  //     }
  //   }
  //   ]
  // };

  public static DISPLAYHEROOBJ: HeroDisplay[] = [
    {
      name: Heroes.BARBARIAN_KING,
      level: 23,
      maxLevel: 50,
      village: 'kjfsölksd',
      heroImg: HeroesImg.BARBARIAN_KING
    },
    {
      name: Heroes.ARCHER_QUEEN,
      level: 45,
      maxLevel: 50,
      village: 'kjfsölksd',
      heroImg: HeroesImg.ARCHER_QUEEN
    },
    {
      name: Heroes.GRAND_WARDEN,
      level: 18,
      maxLevel: 50,
      village: 'kjfsölksd',
      heroImg: HeroesImg.GRAND_WARDEN
    }, {
      name: Heroes.BATTLE_MACHINE,
      level: 25,
      maxLevel: 50,
      village: 'kjfsölksd',
      heroImg: HeroesImg.BATTLE_MACHINE
    }
  ];

  public static PLAYERSTATSBYPLAYERTAGWITHOUTCLAN: PlayerByPlayerTagType = {
    tag: '#9P9UG92CG',
    name: 'Papastadoupoulos',
    expLevel: 132,
    league: {
      id: 8,
      name: 'Champions League III',
      iconUrls: {
        small: 'http://api.coc.iconurl.small/',
        tiny: 'http://api.coc.iconurl.large/',
        medium: 'http://api.coc.iconurl.medium/'
      }
    },
    trophies: 3319,
    versusTrophies: 4010,
    attackWins: 9,
    defenseWins: 27,
    bestTrophies: 4265,
    donations: 12890,
    donationsReceived: 6000,
    warStars: 650,
    role: 'elder',
    townHallLevel: 9,
    builderHallLevel: 7,
    bestVersusTrophies: 4700,
    versusBattleWins: 987,
    achievements: [
      {
        name: 'marco',
        stars: 999,
        value: 99,
        target: 76,
        info: 'no info',
        village: 'xxx_master_of_desaster_xxx'
      }
    ],
    troops: [
      {
        name: 'barbarian',
        level: 6,
        maxLevel: 7,
        village: 'bludber'
      }
    ],
    heroes: [
      {
        name: Heroes.BARBARIAN_KING,
        level: 23,
        maxLevel: 50,
        village: 'kjfsölksd'
      }
    ],
    spells: [
      {
        name: 'rage spell',
        level: 5,
        maxLevel: 5,
        village: 'jfgsdf'
      }
    ]
  };

  public static ACHIEVEMENTMOCK: AchievementType[] = [
    {
      name: 'Donate troops chief!',
      stars: 2,
      value: 49000,
      target: 50000,
      info: 'need to donate 50.000 troops capacity',
      village: 'home-village'
    },
    {
      name: 'War master chief!',
      stars: 3,
      value: 1002,
      target: 1000,
      info: 'get 1000 war stars for your clan',
      village: 'home-village'
    }
  ];

  public static BUILDERINFOMOCK: BuilderInfoType = {
    builderhall: Builderhall.TOWNHALL_BASE,
    imgSrc: 'images/builder.png'
  };

  public static TROOPHOMEATTACKSTATS: TroopsHomeAttackStats = {
    townhall: 9,
    dps: 12,
    dph: 12,
    hp: 120
  };
  public static TROOPHOMEDISPLAYATTACKSTATS = {
        name: 'barbarian',
        level: 6,
        isMaxLevel: false,
        damagePerSec: 12,
        damagePerHit: 12,
        hitPoints: 120
    };

  public static TROOPNIGHTDISPLAYATTACKSTATS = {
    name: 'Raged Barbarian',
    level: 14,
    isMaxLevel: false,
    damagePerSec: 89,
    damagePerHit: 71.2,
    hitPoints: 266
  };

  public static SPELLSHOMEDISPLAYSTATS = {
      name: 'Rage Spell',
      level: 5,
      isMaxLevel: true,
      housingSpace: 2,
      type: 'rage',
      rage: 170
  };
}
