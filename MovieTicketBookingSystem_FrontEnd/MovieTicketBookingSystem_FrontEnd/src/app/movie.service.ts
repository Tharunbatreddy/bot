import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Movie {
  id?: number;
  movieName: string;
  genre: string;
  rating: string;
  imageUrl: string;
  bannerUrl?: string;
  description?: string;
  duration?: string;
  director?: string;
  featured?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api'

  addMovie(newMovieData: Movie) {
    return this.http.post(this.baseUrl + '/addMovie', newMovieData);
  }
  getMovies() {
    return this.http.get(this.baseUrl + '/movies');
  }
  getMovieById(id: number) {
    return this.http.get(this.baseUrl + `/getMovieById/${id}`);
  }

  updateMovie(id: number, updatedMovieData: Movie) {
    return this.http.put(this.baseUrl + `/updateMovie/${id}`, updatedMovieData);
  }
  deleteMovie(id: number) {
    return this.http.delete(this.baseUrl + `/deleteMovie/${id}`);
  }

  getMovieImage() {

    return 'https://picsum.photos/300/400';
  }
}
