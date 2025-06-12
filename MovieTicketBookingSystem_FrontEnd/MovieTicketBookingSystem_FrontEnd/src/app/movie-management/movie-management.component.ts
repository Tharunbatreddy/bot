import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-movie-management',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,MoviesListComponent],
  templateUrl: './movie-management.component.html',
  styleUrl: './movie-management.component.scss'
})
export class MovieManagementComponent {

  movieName = '';
  description = '';
   genre= '';
  duration=0;
  director='';
  rating = '';

  movies = [
    {
      id: 1,
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      image:
        'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/movies/inception.jpg',
      price: 12.99,
    },
  ];

  newMovie = {
    title: '',
    description: '',
    image: '',
    price: 12.99,
  };

  addMovie() {
    if (
      this.newMovie.title &&
      this.newMovie.description &&
      this.newMovie.image
    ) {
      this.movies.push({
        id: this.movies.length + 1,
        ...this.newMovie,
      });
      this.newMovie = {
        title: '',
        description: '',
        image: '',
        price: 12.99,
      };
    }
  }

  deleteMovie(movie: any) {
    this.movies = this.movies.filter((m) => m.id !== movie.id);
  }
  onSubmit(){

  }
}
