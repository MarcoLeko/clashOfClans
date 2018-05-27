import {LeagueType} from '../../../../generated/types';

export interface CompleteClanMemberStatsType {
  tag: string;
  name: string;
  warStars: number;
  townhall: number;
  level: number;
  role: string;
  league: LeagueType;
  trophies: number;
  trophiesNightBase: number;
}
