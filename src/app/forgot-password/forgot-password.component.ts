import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services'
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Validation from '../utils/validation';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})

export class ForgotPasswordComponent implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  form: FormGroup = new FormGroup({
    email: new FormControl('')
  });
  submitted = false;

async forgotPass(): Promise<void> {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    try {
      const email = this.form.value.email;
      await this.authService.forgotPassword(email);
      console.log('Email sent');
      console.log(email);
      this.router.navigate(['/login']);
    } catch (e: any) {
      console.log('error');
      alert(e.message);
    }
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    console.log(this.form.value);
    this.forgotPass()

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
