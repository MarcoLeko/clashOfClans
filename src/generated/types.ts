/**Search all clans by name and/or filtering the results using various criteria. At least one filtering criteria must be defined
 * and if name is used as part of search, it is required to be at least three characters long.

 It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the
 future releases of the API. **/
/**Get information about a single clan by clan tag. Clan tags can be found using clan search operation.

 Note that clan tags start with hash character '#' and that needs to be URL-encoded properly to work in URL, so for
 example clan tag '#2ABC' would become '%232ABC' in the URL.**/
export interface ClanType {
  tag: string;
  name: string;
  badgeUrls: BadgeUrlType;
  location: LocationsType;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  members: number;
}

export interface ClansByClantagType {
  tag: string;
  name: string;
  badgeUrls: BadgeUrlType;
  location: LocationsType;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  members: number;
  type: string;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  warLosses?: number;
  warTies?: number;
  isWarLogPublic: boolean;
  description: string;
  memberList: PlayerByMemberListType[];
}

/**Retrieve clan's clan war log**/
export interface WarlogbyClantagType {
  result: string;
  endTime: string;
  teamSize: number;
  clan: {
    tag: string;
    name: string;
    badgeUrls: BadgeUrlType;
    clanLevel: number,
    attacks: number,
    stars: number,
    expEarned: number
  };
  opponent: OpponentType;
}

export interface CurrentWarByClantagType {
  state: string;
  teamSize: number;
  preparationStartTime: string;
  startTime: string;
  endTime: string;
  clan: {
    tag: string;
    name: string;
    badgeUrls: BadgeUrlType;
    clanLevelExpAttacksType: ClanLevelExpStarsAttacksType;
  };
  opponent: OpponentType;
}

export interface OpponentType {
  clan: {
    tag: string;
    name: string;
    badgeUrls: BadgeUrlType;
  };
  clanLevelExpAttacksType: ClanLevelExpStarsAttacksType;
}

export interface ClanLevelExpStarsAttacksType {
  clanLevel: number;
  attacks: number;
  stars: number;
  expEarned: number;
}

export interface UrlType {
  small: string;
  tiny: string;
  medium: string;
}

export interface BadgeUrlType {
  small: string;
  large: string;
  medium: string;
}

/**List all available locations**/
export interface LocationsType {
  id: number;
  name: string;
  isCountry: boolean;
  countryCode?: string;
}

/**Get information about specific location**/
export interface LeagueIdType {
  id: string;
}

/**Get clan rankings for a specific location**/
export interface ClanRankingsByLocationType {
  clan: ClanType;
  rank: number;
  previousRank: number;
}

/**Get player rankings for a specific location**/
export interface PlayerRanksByLocationType {
  tag: string;
  name: string;
  expLevel: number;
  league: LeagueType;
  trophies: number;
  versusTrophies: number;
  attackWins: number;
  defenseWins: number;
  clan: {
    tag: string;
    name: string;
    badgeUrls: BadgeUrlType;
  };
  rank: number;
  previousRank: number;
}

/**Get clan versus rankings for a specific location**/
export interface ClanRankingsVersusByLocation {
  tag: string;
  name: string;
  location: LocationsType;
  badgeUrls: BadgeUrlType;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  members: number;
  rank: number;
  previousRank: number;
}

/**Get player versus rankings for a specific location**/
export interface PlayerRankingsVersusByLocation {
  tag: string;
  name: string;
  expLevel: number;
  rank: number;
  previousRank: number;
  versusTrophies: number;
  clan: {
    tag: string;
    name: string;
    badgeUrls: BadgeUrlType;
  };
  versusBattleWins: number;
}

export interface LeagueType {
  id: number;
  name: string;
  iconUrls: UrlType;
}

export interface LeagueSeasonRankingsForLegendLeagueType {
  tag: string;
  name: string;
  expLevel: number;
  league: LeagueType;
  trophies: TrophiesType;
  attackWins: number;
  defenseWins: number;
  clan: {
    tag: string;
    name: string;
    badgeUrls: BadgeUrlType;
  };
  rank: number;
}

export interface TrophiesType {
  trophies: number;
  versusTrophies: number;
}

export interface PlayerByPlayerTagType {
  tag: string;
  name: string;
  expLevel: number;
  league?: LeagueType;
  trophies: number;
  versusTrophies: number;
  attackWins: number;
  defenseWins: number;
  clan?: {
    clanLevel: number,
    tag: string;
    name: string;
    badgeUrls: BadgeUrlType;
  };
  bestTrophies: number;
  donations: number;
  donationsReceived: number;
  warStars: number;
  role: string;
  townHallLevel: number;
  builderHallLevel: number;
  bestVersusTrophies: number;
  versusBattleWins: number;
  legendStatistics?: {
    legendTrophies: number,
    currentSeason: {
      rank: number,
      trophies: number,
      id: string
    },
    previousSeason: {
      rank: number,
      trophies: number,
      id: string
    },
    bestSeason: {
      rank: number;
      trophies: number;
      id: string
    }
    bestVersusSeason?: {
      rank: number;
      trophies: number;
      id: string
    }
  };
  achievements: AchievementType[];
  troops: TroopsHeroesAndSpellType[];
  heroes?: TroopsHeroesAndSpellType[];
  spells: TroopsHeroesAndSpellType[];
}

export interface PlayerByMemberListType {
  clanRank: number;
  donations: number;
  donationsReceived: number;
  expLevel: number;
  league: LeagueType;
  name: string;
  previousClanRank: number;
  role: string;
  tag: string;
  trophies: number;
  versusTrophies: number;
}
export interface DonationsType {
  donations: number;
  donationsReceived: number;
}

export interface TroopsHeroesAndSpellType {
  name: string,
  level: number,
  maxLevel: number,
  village: string
}

export interface AchievementType {
  name: string,
  stars: number,
  value: number,
  target: number,
  info: string,
  village: string
}
