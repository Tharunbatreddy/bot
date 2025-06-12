import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-show-times-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './show-times-list.component.html',
  styleUrl: './show-times-list.component.scss'
})
export class ShowTimesListComponent {

  showTimes: any = [];

  constructor(private showService: ShowService, public router: Router, private activateRoute: ActivatedRoute,
    public location: Location
  ) { }
  private movieId: any;
  ngOnInit() {
    this.movieId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getAllShowByMovieId(this.movieId);
  }
  getAllShowByMovieId(id: number) {
    this.showService.getShowTimes(id).subscribe(times => {
      this.showTimes = times;
    });
  }
  deleteShow(id: number) {
    this.showService.deleteShow(id).subscribe((res: any) => {
      if (res.message) {
        alert("Show Deleted Successfully");
        this.getAllShowByMovieId(this.movieId);
      } else {
        alert('Something went wrong.Try again!!')
      }
    });
  }
}
