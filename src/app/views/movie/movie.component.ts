import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetails } from 'src/app/modals/movie-details';
import { environment } from 'src/environments/environment';
import { Genre } from './../../../app/modals/genre';
import { Cast } from './../../modals/cast';
import { take } from 'rxjs';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  private id: number = 0;

  movieDetails: MovieDetails = {
    backdrop_path: '',
    budget: 0,
    genres: [],
    id: 0,
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    runtime: 0,
    status: '',
    title: '',
    vote_average: 0
  }

  casts: Array<Cast> = [];

  urlImg: string = '';

  constructor(private route: ActivatedRoute, private movie: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe({
      next: params => {
        this.id = Number( params['id'] );
        this.getDetails(this.id);
      }
    })
  }

  img(url_img_file: string): string{
    return environment.IMG_URL_BASE_500 + url_img_file;
  }

  private getDetails(id: number){
    this.movie.getMovie(id).pipe(take(1)).subscribe({
      next: data => {
        this.movieDetails.backdrop_path = data.backdrop_path;
        this.movieDetails.budget = data.budget;
        this.movieDetails.id = data.id;
        this.movieDetails.original_title = data.original_title;
        this.movieDetails.overview = data.overview;
        this.movieDetails.poster_path = data.poster_path;
        this.movieDetails.release_date = data.release_date;
        this.movieDetails.runtime = data.runtime;
        this.movieDetails.status = data.status;
        this.movieDetails.title = data.title;
        this.movieDetails.vote_average = data.vote_average;

        data.genres.forEach((genre: Genre) => {
          this.movieDetails.genres.push(genre);
        });
        this.urlImg = `url(${environment.IMG_URL_BASE + this.movieDetails.backdrop_path})`;
        this.getCredits(id);
      }
    });
  }

  private getCredits(id: number){
    this.movie.getMovieCredits(id).pipe(take(1)).subscribe({
      next: credits => {
        this.casts = credits.cast;
      }
    })
  }
}
