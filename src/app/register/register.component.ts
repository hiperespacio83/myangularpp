import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = { name: '', email: '', password: '' };
  message: string | null = null;

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.user).subscribe(response => {
      this.message = 'User registered successfully!';
      console.log('User registered', response);
    });
  }

}
