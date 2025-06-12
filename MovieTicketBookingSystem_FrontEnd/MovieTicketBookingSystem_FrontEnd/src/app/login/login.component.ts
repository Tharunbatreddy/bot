import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  constructor(
    private authService: UserService,
    private router: Router
  ) { }

 
  onSubmit() {
    this.error = '';
    this.authService.login(this.email, this.password).subscribe({
      next: (res: any) => {
        // this.authService.currentUser = res.user;
        localStorage.setItem('loggedIn',JSON.stringify(res.user));
        alert("Loggedin successfully!!");
        this.router.navigate(['/']);
      },
      error: (err) => this.error = err.message
    });
  }
}
