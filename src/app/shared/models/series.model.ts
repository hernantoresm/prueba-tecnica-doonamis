export interface SeriesModel {
  popularity: number;
  id: number;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
  poster_path?: string;
  backdrop_path?: string;
}

export interface EpisodeModel {
  air_date: string;
  format: Date;
  crew: Array<CrewModel>;
  episode_number: number;
  guest_stars: Array<GuestStartsModel>;
  name: string;
  overview: string;
  id: number;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  production_code?: string;
}

export interface CrewModel {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  profile_path?: string;
}

export interface GuestStartsModel {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: string;
  profile_path?: string;
}

export interface SeasonModel {
  _id: string;
  air_date: string;
  episodes: Array<EpisodeModel>;
  name: string;
  overview: string;
  id: number;
  poster_path?: string;
  season_number: number;
}
