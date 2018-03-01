/**Search all clans by name and/or filtering the results using various criteria. At least one filtering criteria must be defined
 * and if name is used as part of search, it is required to be at least three characters long.

 It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the
 future releases of the API. **/
/**Get information about a single clan by clan tag. Clan tags can be found using clan search operation.

 Note that clan tags start with hash character '#' and that needs to be URL-encoded properly to work in URL, so for
 example clan tag '#2ABC' would become '%232ABC' in the URL.**/
export interface ClanType {
  clan: ClanDefaultInformationType;
  location: LocationsType;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  members: number;
}

export interface ClansByClantagType {
  clan: ClanType;
  type: string;
  requiredTrophies: string;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  isWarLogPublic: boolean;
  description: string;
  memberList: ClanMembersType[];
}

/**List clan members**/
export interface ClanMembersType {
  tag: string;
  name: string;
  expLevel: number;
  league: {
    id: number,
    name: string,
    iconUrls: UrlType,
    trophies: number,
    versusTrophies: number,
    role: string,
    clanRank: number,
    previousClanRank: number
    donations: DonationsType;
  };
}
/**Retrieve clan's clan war log**/
export interface WarlogbyClantagType {
  result: string;
  endTime: string;
  teamSize: number;
  clan: {
    clan: ClanDefaultInformationType,
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
    clan: ClanDefaultInformationType,
    clanLevelExpAttacksType: ClanLevelExpStarsAttacksType;
  };
  opponent: OpponentType;
}

export interface OpponentType {
  clan: ClanDefaultInformationType;
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
  large: string;
  medium: string;
}

/**List all available locations**/
export interface LocationsType {
  id: number;
  name: string;
  isCountry: boolean;
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
  clan: ClanDefaultInformationType;
  rank: number;
  previousRank: number;
}

/**Get clan versus rankings for a specific location**/
export interface ClanRankingsVersusByLocation {
  tag: string;
  name: string;
  location: LocationsType;
  badgeUrls: UrlType;
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
  clan: ClanDefaultInformationType;
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
  attacksAndDefence: AttacksAndDefenceType;
  clan: ClanDefaultInformationType;
  rank: number;
}

export interface TrophiesType {
  trophies: number;
  versusTrophies: number;
}

export interface ClanDefaultInformationType {
  tag: string;
  name: string;
  badgeUrls: UrlType;
}

export interface PlayerByPlayerTagType {
  tag: string;
  name: string;
  expLevel: number;
  league: LeagueType;
  trophies: number;
  versusTrophies: number;
  attacksAndDefence: AttacksAndDefenceType;

  clan: {
    clanLevel: number,
    clan: ClanDefaultInformationType
  };
  bestTrophies: number;
  donations: DonationsType;
  warStars: number;
  role: string;
  townHallLevel: number;
  builderHallLevel: number;
  bestVersusTrophies: number;
  versusBattleWins: number;
  legendStatistics: {
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
  };
  achievements: [
    {
      name: string,
      stars: number,
      value: number,
      target: number,
      info: string,
      village: string
    }
    ];
  troops: [
    {
      name: string,
      level: number,
      maxLevel: number,
      village: string
    }
    ];
  heroes: [
    {
      name: string,
      level: number,
      maxLevel: number,
      village: string
    }
    ];
  spells: [
    {
      name: string,
      level: number,
      maxLevel: number,
      village: string
    }
    ];
}

export interface AttacksAndDefenceType {
  attackWins: number;
  defenseWins: number;
}

export interface DonationsType {
  donations: number;
  donationsReceived: number;
}
