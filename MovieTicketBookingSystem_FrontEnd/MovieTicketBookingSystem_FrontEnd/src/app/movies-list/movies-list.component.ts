import { Component } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  movies: any = [];

  constructor(private movieService: MovieService, public router: Router) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getMovies().subscribe((movies: any) => {
      movies.forEach((e: any) => {
        const randomParam = Math.floor(Math.random() * 1000000);  // Random number to ensure unique URL
        // Construct the API URL with the random query parameter
        const apiUrl = `https://picsum.photos/300/400?random=${randomParam}`;
        // Update the image source with the new URL
        e.imageUrl = apiUrl;
      });
      this.movies = movies;
    });
  }
  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe((res: any) => {
      if (res.message) {
        alert("Movie Deleted Successfully");
        this.getAllMovies();
      } else {
        alert('Something went wrong.Try again!!')
      }
    });
  }
}
