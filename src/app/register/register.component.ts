import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = { name: '', email: '', password: '' };
  message: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.register(this.user).subscribe(response => {
      this.message = 'User registered successfully!';
      this.user = { name: '', email: '', password: '' }; // Reset form
      console.log('User registered', response);
      this.router.navigate(['/login']);
    },error => {
      console.error('Registration failed', error);
    });
  }

}
