import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-edit-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-edit-movie.component.html',
  styleUrl: './add-edit-movie.component.scss'
})
export class AddEditMovieComponent {
  movieData = {
    movieName: '',
    description: '',
    genre: '',
    duration: '',
    director: '',
    rating: '',
    imageUrl: 'https://picsum.photos/300/400',
    bannerUrl: 'https://picsum.photos/1920/1080',
    language: '',
    releaseDate: new Date()
  }
  id = 0;
  error = '';
  constructor(public activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      if (this.id) {
        this.getMovieDetailsById();
      }
    });
  }
  ngOnInit() {
  }
  getMovieDetailsById() {
    this.movieService.getMovieById(this.id).subscribe({
      next: (res: any) => {
        res.releaseDate = this.formatDate(new Date(res.releaseDate));
        this.movieData = res;
      },
      error: (err) => this.error = err.message
    });
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`; // Return the date in YYYY-MM-DD format
  }

  onSubmit() {
    this.movieData.language = this.movieData.language.toString();
    if (this.id) {
      this.movieService.updateMovie(this.id, this.movieData).subscribe({
        next: (res: any) => {
          alert("Movie updated successfully!!");
          this.router.navigate(['/manage-movies'])
        },
        error: (err) => {
          this.error = err.message;
          alert(this.error);
        }
      });
    } else {
      this.movieService.addMovie(this.movieData).subscribe({
        next: (res: any) => {
          alert("Movie added successfully!!");
          this.router.navigate(['/manage-movies'])
        },
        error: (err) => {
          this.error = err.message;
          alert(this.error);
        }
      });
    }
  }
}
