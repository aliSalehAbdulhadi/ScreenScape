'use client';

export interface videoPlayerInterface {
  onEnd?: Function;
  onReady?: Function;
  onError?: Function;
  videoId: string;
  controls?: boolean;
  autoplay?: boolean;
  stopVideo?: boolean;
  playVideo?: boolean;
  pauseVideo?: boolean;
  mute?: boolean;
  reloadVideo?: boolean;
  height?: string;
  width?: string;
}

export interface SignInInterface {
  email: string;
  password: string;
}

export interface SignUpInterface {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ActorSingleInterface {
  adult: boolean;
  also_known_as?: string[];
  biography?: string;
  birthday?: string;
  deathday?: string | null;
  gender: number;
  homepage?: string | null;
  id: number;
  imdb_id?: string;
  known_for_department?: string;
  name: string;
  place_of_birth?: string;
  popularity?: number;
  profile_path?: string | undefined;
}

export interface TrailerTitleInterface {
  adult: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id: number;
  media_type?: string;
  original_language?: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string | null;
  release_date: string;
  title: string;
  trailer?: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  } | null;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface TvShowSingleInterface {
  adult: boolean;
  backdrop_path?: string | null;
  character?: string;
  credit_id: string;
  episode_count: number;
  first_air_date: string;
  genre_ids?: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieSingleInterface {
  adult: boolean;
  backdrop_path?: string | null;
  character?: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  order?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FullMovieSingleInterface {
  adult: boolean;
  awards: string;
  backdrop_path: string | null;
  belongs_to_collection: any | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  rated: string;
  ratings: {
    Source: string;
    Value: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FullTvShowSingleInterface {
  adult: boolean;
  awards: string;
  backdrop_path: string | null;
  created_by: {
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string | null;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
  } | null;
  name: string;
  networks: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  rated: string;
  ratings: {
    Source: string;
    Value: string;
  }[];
  seasons: {
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
