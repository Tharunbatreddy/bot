import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ShowService } from '../show.service';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-show',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './add-edit-show.component.html',
  styleUrl: './add-edit-show.component.scss'
})
export class AddEditShowComponent {

  id: any;
  movieId: any;
  error = '';
  showData: any = {
    showDate: '',
    showTime: ''
  };
  constructor(public activatedRoute: ActivatedRoute, private showService: ShowService, public router: Router, public location: Location) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.movieId = params.movieId;
      if (this.id) {
        this.getShowDetailsById();
      }
    });
  }
  ngOnInit() {
    this.showData.movieId = this.movieId;
  }
  getShowDetailsById() {
    this.showService.getShowById(this.id).subscribe({
      next: (res: any) => {
        res.showDate = this.formatDate(new Date(res.showDate));
        this.showData = res;
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
    this.showData.showDate = new Date(this.showData.showDate).toISOString()
    if (this.id) {
      this.showService.updateShow(this.id, this.showData).subscribe({
        next: (res: any) => {
          alert("Show updated successfully!!");
          this.location.back();
        },
        error: (err) => {
          this.error = err.message;
          alert(this.error);
        }
      });
    } else {
      this.showService.addShow(this.showData).subscribe({
        next: (res: any) => {
          this.showService.addSeats(res.show.id).subscribe((seats: any) => {
            alert("Show added successfully!!");

            this.location.back();
          })
        },
        error: (err) => {
          this.error = err.message;
          alert(this.error);
        }
      });
    }
  }
}
