import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  amount = 0;
  cardNumber = '';
  expiryDate = '';
  cvv = '';
  bookedData: any = {};
  constructor(private router: Router, private bookingService: BookingService) {
    const navigation = this.router.getCurrentNavigation();
    const state: any = navigation?.extras.state;
    if (state) {
      this.bookedData.amount = Number(state.amount);
      this.bookedData.showId = state.showtimeId;
      this.bookedData.seatIds = state.seats;
      const userData = (localStorage.getItem('loggedIn'));
      const user = userData ? JSON.parse(userData) : null;

      this.bookedData.userId = user.id;
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() { }

  onSubmit() {
    this.bookingService.bookTickets(this.bookedData).subscribe((res: any) => {
      // Simulate payment processing
      setTimeout(() => {
        alert('Payment successful! Booking confirmed.');
        this.router.navigate(['/bookings']);
      }, 1000);
    })
  }
}
