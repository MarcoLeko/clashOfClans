export interface Clans {
  tag: string;
  name: string;
  location: Location;
  badgeUrls: BadgeUrls;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  members: number;
}

export interface ClansByClantag {
  clan: Clans;
  type: string;
  requiredTrophies: string;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  isWarLogPublic: boolean;
  description: string;
  memberList: ClanMembersByClantag[];
}

export interface ClanMembersByClantag {
  tag: string;
  name: string;
  expLevel: number;
  league: {
    id: number,
    name: string,
    iconUrls: BadgeUrls,
    trophies: number,
    versusTrophies: number, role: string, clanRank: number,
    previousClanRank: number
    donations: number,
    donationsReceived: number
  };
}

export interface WarlogbyClantag {
  result: string;
  endTime: string;
  teamSize: number;
  clan: {
    tag: string,
    name: string,
    badgeUrls: BadgeUrls,
    clanLevel: number,
    attacks: number,
    stars: number,
    expEarned: number
  };
  opponent: Opponent;
}

export interface CurrentWarByClantag {
  state: string;
  teamSize: number;
  preparationStartTime: string;
  startTime: string;
  endTime: string;
  clan: {
    tag: string,
    name: string,
    badgeUrls: BadgeUrls,
    clanLevel: number,
    attacks: number,
    stars: number,
    expEarned: number
  };
  opponent: Opponent;
}

export interface Opponent {
  tag: string;
  name: string;
  badgeUrls: BadgeUrls;
  clanLevel: number;
  attacks: number;
  stars: number;
  expEarned: number;
}
export interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

export interface Location {
  id: number;
  name: string;
  isCountry: boolean;
}

