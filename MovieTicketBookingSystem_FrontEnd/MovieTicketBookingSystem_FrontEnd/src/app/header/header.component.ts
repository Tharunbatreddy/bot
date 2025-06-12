import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentUser: any;

  constructor(public authService: UserService) { }
  logout() {
    this.authService.logout();
  }
  ngDoCheck() {
    const userData = (localStorage.getItem('loggedIn'));
    this.currentUser = userData ? JSON.parse(userData) : null;
  }
}
