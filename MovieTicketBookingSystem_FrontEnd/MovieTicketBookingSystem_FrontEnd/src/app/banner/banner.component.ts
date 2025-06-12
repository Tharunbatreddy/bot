import { Component } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  featuredMovies: any = [];

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  };

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    // Initialize Owl Carousel here
    this.movieService.getMovies().subscribe((movies: any) => {
      movies.forEach((e: any) => {
        const randomParam = Math.floor(Math.random() * 10000000);  // Random number to ensure unique URL
        // Construct the API URL with the random query parameter
        const apiUrl = `https://picsum.photos/1920/1080?random=${randomParam}`;
        // Update the image source with the new URL
        e.bannerUrl = apiUrl;
      });
      this.featuredMovies = movies;
      this.featuredMovies.slice(0, 3)
    });
  }
}
