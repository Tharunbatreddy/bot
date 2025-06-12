import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddEditMovieComponent } from './add-edit-movie/add-edit-movie.component';
import { ShiwtimesSeatSelectionComponent } from './shiwtimes-seat-selection/shiwtimes-seat-selection.component';
import { ShowtimeManagementComponent } from './showtime-management/showtime-management.component';
import { AddEditShowComponent } from './add-edit-show/add-edit-show.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingsComponent } from './bookings/bookings.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'admin', component: DasboardComponent },
  { path: 'manage-movies', component: MovieManagementComponent },
  { path: 'movies-list', component: MoviesListComponent },
  { path: 'add-movie', component: AddEditMovieComponent },
  { path: 'edit-movie/:id', component: AddEditMovieComponent },
  { path: 'booking/:id', component: ShiwtimesSeatSelectionComponent },
  { path: 'manage-shows/:id', component: ShowtimeManagementComponent },
  { path: 'add-show/:movieId', component: AddEditShowComponent },
  { path: 'edit-show/:movieId/:id', component: AddEditShowComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'bookings', component: BookingsComponent },
];
