import { Genre } from "./genre";

export interface MovieDetails {
  backdrop_path: string;
  budget: number;
  genres: Array<Genre>;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  vote_average: number;
}
