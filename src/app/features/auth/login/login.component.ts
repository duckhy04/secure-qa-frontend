import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, StorageService, ToastService } from '../../../core/services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup
  loginError: string | null = null;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private localStorage: StorageService,
    private toastService: ToastService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/[A-Z]/),
          Validators.pattern(/[a-z]/),
          Validators.pattern(/[0-9]/),
        ],
      ],
    });
  }

  login() {

    // console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        // console.log(response.data.token);
        this.localStorage.saveToken(response.data.token);
        this.toastService.showToast(response.message, 'success');
        this.loginError = null;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.loginError = error.error.message;
        this.toastService.showToast(error.error.message, 'error');
      }
    })

  }

}
