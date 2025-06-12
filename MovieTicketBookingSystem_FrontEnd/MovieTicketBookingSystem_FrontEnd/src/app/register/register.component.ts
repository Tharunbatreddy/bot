import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  age = 0;
  mobileNo = '';
  error = '';

  constructor(
    private authService: UserService,
    private router: Router
  ) { }

  onSubmit() {
    this.error = '';
    this.authService.register(this.email, this.password, this.name, this.age, this.mobileNo).subscribe({

      next: () => {
        alert("Registered successfully");
        this.router.navigate(['/login'])
      },
      error: (err) => {
        this.error = err.message;
        alert(this.error);
      }
    });
  }
}
