import { Component } from '@angular/core';
import { ShowTimesListComponent } from '../show-times-list/show-times-list.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-showtime-management',
  standalone: true,
  imports: [ShowTimesListComponent, RouterLink],
  templateUrl: './showtime-management.component.html',
  styleUrl: './showtime-management.component.scss'
})
export class ShowtimeManagementComponent {
  public movieId: any;
  constructor(private activateRoute: ActivatedRoute) {
    this.movieId = Number(this.activateRoute.snapshot.paramMap.get('id'));
  }
}
