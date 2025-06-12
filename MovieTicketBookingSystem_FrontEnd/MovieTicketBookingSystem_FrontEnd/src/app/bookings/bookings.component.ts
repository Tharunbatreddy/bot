import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {
  public bookings: any;
  currentUser: any;
  constructor(private router: Router, public bookingService: UserService) {
  }

  ngAfterViewInit() {
    this.getAllBookings()
  }
  ngDoCheck() {
    const userData = (localStorage.getItem('loggedIn'));
    this.currentUser = userData ? JSON.parse(userData) : null;
  }

  getAllBookings() {
    this.bookingService.bookings(this.currentUser.id).subscribe((res: any) => {
      res.forEach((e: any) => {
        const randomParam = Math.floor(Math.random() * 1000000);  // Random number to ensure unique URL
        // Construct the API URL with the random query parameter
        const apiUrl = `https://picsum.photos/300/400?random=${randomParam}`;
        // Update the image source with the new URL
        e.imageUrl = apiUrl;
      });
      this.bookings = res;
    });
  }
}
