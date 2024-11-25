type MediaType = 'movie' | 'tv' | 'person';

export interface Media {
  adult: boolean;
  gender?: number;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  profile_path?: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  vote_average?: number;
  vote_count?: number;
  media_type?: MediaType;
  known_for?: Media[];
  known_for_department?: string;
  video?: boolean;
}
