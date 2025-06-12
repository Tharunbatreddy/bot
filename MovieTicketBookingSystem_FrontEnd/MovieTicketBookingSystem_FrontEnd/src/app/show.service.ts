import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api';
  getShowTimes(movieId: number) {
    // const times = [
    //   { id: 1, time: '10:00 AM', date: '2024-01-20' },
    //   { id: 2, time: '2:30 PM', date: '2024-01-20' },
    //   { id: 3, time: '6:00 PM', date: '2024-01-20' },
    //   { id: 4, time: '9:30 PM', date: '2024-01-20' }
    // ];
    // return of(times);
    return this.http.get(this.baseUrl + `/getAllShowsByMovieId/${movieId}`);
  }
  getAllShowTimes() {
    return this.http.get(this.baseUrl + `/shows`);
  }
  addShow(showData: any) {
    return this.http.post(this.baseUrl + '/addShow', showData);
  }
  getShowById(id: number) {
    return this.http.get(this.baseUrl + `/getShowById/${id}`);
  }

  updateShow(id: number, updatedShowData: any) {
    return this.http.put(this.baseUrl + `/updateShow/${id}`, updatedShowData);
  }
  deleteShow(id: number) {
    return this.http.delete(this.baseUrl + `/deleteShow/${id}`);
  }

  addSeats(id: any) {
    return this.http.post(this.baseUrl + `/addSeats/${id}?rows=10&seatsPerRow=10`, {})
  }
}
