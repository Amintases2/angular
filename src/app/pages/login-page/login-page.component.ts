import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isPasswordVisible = signal<boolean>(false);
  boxShadow = signal<string>('5px 5px var(--primary-color)');

  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSubmit() {
    const data = this.loginForm.value;
    if (this.loginForm.valid) {
      //@ts-ignore
      this.authService.login(data).subscribe(
        (res) => {
          this.router.navigate(['']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('invalid');
    }
  }
}
