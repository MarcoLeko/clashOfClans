import { PlayerByPlayerTagType } from '../../generated/types';

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
        large: 'http://api.coc.iconurl.large/',
        medium: 'http://api.coc.iconurl.medium/'
      }
    },
    trophies: 3319,
    versusTrophies: 4010,
    attacksAndDefence: {
      attackWins: 9,
      defenseWins: 27
    },
    clan: {
      clanLevel: 20,
      clan: {
        tag: '#87878989',
        name: 'Wolfsrudel',
        badgeUrls: {
          small: 'http://api.coc.badgeurl.small/',
          large: 'http://api.coc.badgeurl.large/',
          medium: 'http://api.coc.badgeurl.medium/'
        }
      }
    },
    bestTrophies: 4265,
    donations: {
      donations: 12890,
      donationsReceived: 6000
    },
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
        village: 'bludber'
      }
    ],
    heroes: [
      {
        name: 'Barbarianking',
        level: 23,
        maxLevel: 50,
        village: 'kjfsölksd'
      },
      {
        name: 'Archerqueen',
        level: 45,
        maxLevel: 50,
        village: 'kjfsölksd'
      },
      {
        name: 'warden',
        level: 18,
        maxLevel: 50,
        village: 'kjfsölksd'
      }, {
        name: 'battle-machine',
        level: 25,
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
}
