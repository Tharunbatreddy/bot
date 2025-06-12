import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Seat {
  id: number;
  row: string;
  number: number;
  price: number;
  status: 'available' | 'selected' | 'booked';
  seatNo: string,
  isAvailable: boolean;
}

export interface ShowTime {
  id: number;
  time: string;
  date: string;
}


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api';

  getShowTimes(movieId: number) {
    return this.http.get(this.baseUrl + `/getAllShowsByMovieId/${movieId}`);
  }

  getSeats(showtimeId: number) {
    return this.http.get(this.baseUrl + `/getAllSeatsByShowId/${showtimeId}`);
  }

  bookTickets(bookedData: any) {
    return this.http.post(this.baseUrl + `/bookTickets?userId=${bookedData.userId}&showId=${bookedData.showId}&seatIds=${bookedData.seatIds}`, bookedData);
  }
}