import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = { email: '', password: '' };
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.user).subscribe(response => {
      this.authService.setToken(response.token);
      this.successMessage = 'Login successful!';
      this.errorMessage = null;
      this.user = { email: '', password: '' }; // Reset form
      console.log('User logged in', response);
      this.router.navigate(['/inicio']);
    }, error => {
      this.errorMessage = 'Credenciales invalidas';
      this.successMessage = null;
    });
  }

}
