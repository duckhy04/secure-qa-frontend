import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, StorageService, ToastService } from '../../../core/services/services';
import { SignUp } from '../../../core/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  signUpFormError: string | null = null;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
        ],
      ],
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
      confirmPassword: [null, Validators.required],
    })
  }

  signUp() {

    // console.log(this.signUpForm.value);

    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = this.signUpForm.get('confirmPassword')?.value;

    const signUp: SignUp = {
      username: this.signUpForm.get('username')?.value,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value
    }

    if (password === confirmPassword) {
      this.authService.signUp(signUp).subscribe({
        next: (response) => {
          // console.log(response);
          this.signUpFormError = null;
          this.toastService.showToast(response.message, 'success');
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          // console.log(error.error.message);
          this.signUpFormError = error.error.message;
          this.toastService.showToast(error.error.message, 'error');
        }
      })
    } else {
      this.signUpFormError = 'Password does not match';
      this.toastService.showToast("Password does not match", 'error');
    }
  }
}
