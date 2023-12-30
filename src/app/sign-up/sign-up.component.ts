import { Component, OnInit } from '@angular/core';
import { AuthService, Credential } from '../services/auth.services';
import { Router } from '@angular/router';
import Validation from '../utils/validation';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { getAuth, updateProfile } from "firebase/auth";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthService, private formBuilder: FormBuilder) {}
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    displayName: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;


  async signUp(): Promise<void> {
    if (this.form.invalid) return;

    const credential: Credential = {
      email: this.form.value.email || '',
      password: this.form.value.password || '',
    };
    credential.displayName = this.form.value.displayName || '';

    try {
      const userCredential = await this.authService.signUpWithEmailAndPassword(credential);
      console.log('Registered successfully');

      const auth = getAuth();
      const user = auth.currentUser;

      if (user !== null) {
        await updateProfile(user, {
          displayName: credential.displayName
        });

        console.log('Display name updated ' + credential.displayName);
        this.router.navigate(['/add']);
      } else {
        console.error('User is null');
      }
    } catch (error) {
      console.error('Registration error:', error);
      this.form.setErrors({ invalidRegistration: true });
    }
  }



  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        displayName: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.signUp();

    if (this.form.invalid) {
      return;
    }
    // console.log(JSON.stringify(this.form.value, null, 2));
  }
}
