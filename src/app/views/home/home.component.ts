import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/modals/movie';
import { take } from 'rxjs';
import { environment } from './../../../environments/environment';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMovies: Movie[] = [];
  urlImg: string = '';
  total_pages: number = 1;
  page: number = 1;

  constructor(private movies: MoviesService) { }

  ngOnInit(): void {
    this.getMovies(this.page);
  }

  getMovies(page: number){
    if(this.listMovies.length){
      this.listMovies = [];
    }
    this.movies.getMoviePopular(page).pipe(take(1)).subscribe({
      next: movies => {
        movies.results.forEach((element: any) => {
          const movie: Movie = {
            backdrop_path: '',
            id: 0,
            original_title: '',
            overview: '',
            poster_path: '',
            title: ''
          }

          movie.backdrop_path = element.backdrop_path;
          movie.id = element.id;
          movie.original_title = element.original_title;
          movie.overview = element.overview;
          movie.poster_path = element.poster_path;
          movie.title = element.title;

          this.listMovies.push(movie);
        });
        this.urlImg = `url(${environment.IMG_URL_BASE + this.listMovies[0].backdrop_path})`;
        this.total_pages = movies.total_pages;
      }
    });
  }

  img(url_img_file: string): string{
    return environment.IMG_URL_BASE_500 + url_img_file;
  }

  mudarPagina(event: PageEvent){
    this.page = event.pageIndex + 1;
    this.getMovies(this.page);
  }
}
