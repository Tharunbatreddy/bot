import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { BookingService, Seat, ShowTime } from '../booking.service'
import { ShowService } from '../show.service';


@Component({
  selector: 'app-shiwtimes-seat-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shiwtimes-seat-selection.component.html',
  styleUrl: './shiwtimes-seat-selection.component.scss'
})
export class ShiwtimesSeatSelectionComponent {

  movie: any;
  showTimes: any = [];
  seats: Seat[] = [];
  selectedShowTime?: ShowTime;
  selectedSeats: Seat[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private bookingService: BookingService,
    private showService: ShowService
  ) { }

  ngOnInit() {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(movieId).subscribe(movie => {
      this.movie = movie;
      this.loadShowTimes(movieId);
    });
  }

  loadShowTimes(movieId: number) {
    this.showService.getShowTimes(movieId).subscribe(times => {
      this.showTimes = times;
    });
  }

  selectShowTime(time: ShowTime) {
    this.selectedShowTime = time;
    this.selectedSeats = [];
    this.bookingService.getSeats(time.id).subscribe((seats: any) => {
      seats.forEach((e: any) => {
        e.price = 100;
      })
      this.seats = seats;
      return;
    });
  }

  getRows(): string[] {
    return [...new Set(this.seats.map((seat: any) => seat.seatType))];
  }

  getSeatsInRow(row: string): Seat[] {
    return this.seats.filter((seat: any) => seat.seatType === row);
  }

  toggleSeat(seat: Seat) {
    if (seat.status === 'booked') return;

    const index = this.selectedSeats.findIndex(s => s.id === seat.id);
    if (index === -1) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats.splice(index, 1);
    }
  }

  getSeatColor(seat: Seat): string {
    if (!seat.isAvailable) return '#9e9e9e';
    if (this.selectedSeats.some(s => s.id === seat.id)) return 'var(--primary)';
    return '#e0e0e0';
  }

  getSelectedSeatsText(): string {
    return this.selectedSeats
      .map((seat: any) => seat.seatType + seat.seatNo)
      .join(', ');
  }

  getTotalAmount(): number {
    return this.selectedSeats.reduce((total, seat) => total + seat.price, 0);
  }

  getSelectedSeatsIds(): string {
    const ids: any = [];
    this.selectedSeats.forEach((e: any) => {
      ids.push(e.id);
    })
    return ids.toString();
  }
  proceedToPayment() {

    this.router.navigate(['/payment'], {
      state: {
        movieId: this.movie.id,
        showtimeId: this.selectedShowTime?.id,
        seats: this.getSelectedSeatsIds(),
        amount: this.getTotalAmount()
      }
    });
  }
}
