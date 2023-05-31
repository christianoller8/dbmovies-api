export interface Movie {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: Collection | null;
  budget?: number;
  genres?: Genre[];
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: SpokenLanguage[];
  status?:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline?: string | null;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface ListMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SimpleMovie {
  title: string;
  overview: string;
}

export interface Collection {
  id?: number;
  name?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
}

export interface Genre {
  genres: Genre[];
  id?: number;
  name?: string;
}

export interface ProductionCompany {
  id?: number;
  logo_path?: string | null;
  name?: string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}
