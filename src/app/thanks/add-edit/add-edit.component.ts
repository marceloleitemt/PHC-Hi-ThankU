import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { AuthService } from '../../services/auth.services';
import { getAuth } from 'firebase/auth';
import { Thankus } from '../../services/thankus';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {
  displayName: string = "Anonimo";
  email: string = "anonimo@email.com";
  uid: string = "01010101010101010101010101010101";

  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {}

  form: FormGroup = new FormGroup({
    thanksPara: new FormControl(''),
    mensagem: new FormControl(''),
    tipo: new FormControl(''),
    nomeUtil: new FormControl('')
  });

  submitted = false;


  async postThanks(): Promise<void> {
    if (this.form.invalid) return

    const thanku: Thankus = {
      tipo: this.form.value['tipo'],
      mensagem: this.form.value['mensagem'],
      nomeUtil: this.displayName,
      deUtil: this.email,
      userNo: this.uid,
      paraUtil: this.form.value['thanksPara'],
      paraUserNo: 0,
      phc: false,
      dataPost: new Date(),
      edHitech: 17,
      likes: 0
    };

    this.sharedService.addThanks(thanku)
      .then(() => {
        console.log('Thanks added successfully');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error adding thanks:', error);
      });

    this.submitted = true;

  }

  //prevent line breaks
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const sanitizedValue = inputValue.replace(/(\r\n|\n|\r)/gm, '');
    inputElement.value = sanitizedValue;
    this.form.controls['mensagem'].setValue(sanitizedValue);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
      thanksPara: ['', [Validators.required]],
      mensagem: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(255),
        ],
      ],
      tipo: ['Thank You', [Validators.required]]
    }
    );
    this.retrieveUserInfo().then((userInfo) => {
      // console.log("buscando user info");
      if (userInfo !== null) {
        this.displayName = userInfo.displayName;
        this.email = userInfo.email;
        this.uid = userInfo.uid;
      }
      // console.log(userInfo);
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.postThanks();
    if (this.form.invalid) {
      this.form.setErrors({ formInvalido: true })
      return;
    }
    // console.log(JSON.stringify(this.form.value, null, 2));
  }

  private async retrieveUserInfo(): Promise<UserInfo | null> {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      return {
        displayName: user.displayName || '',
        email: user.email || '',
        uid: user.uid || '',
      };
    } else {
      return null;
    }
  }
}

interface UserInfo {
  displayName: string;
  email: string;
  uid: string;
}
