import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMoviePopular(page: number = 1): Observable<any>{
    const params = new HttpParams().set('api_key', environment.API_KEY).set('language', environment.LANGUAGE).set('page', page);
    return this.http.get<any>(environment.MOVIE_POPULAR_URL, { params });
  }

  getMovie(id: number): Observable<any>{
    const params = new HttpParams().set('api_key', environment.API_KEY).set('language', environment.LANGUAGE);
    return this.http.get<any>(environment.MOVIE_URL + id, { params } );
  }

  getMovieCredits(id: number): Observable<any>{
    const params = new HttpParams().set('api_key', environment.API_KEY).set('language', environment.LANGUAGE);
    return this.http.get<any>(`${environment.MOVIE_URL}${id}/credits`, { params } );
  }
}
