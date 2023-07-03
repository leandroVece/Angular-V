import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { MyValidators } from 'src/app/utils/Validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  formRegister!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  register(event: Event) {
    //crear evento de registro
  }

  private buildForm() {
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
      confirmPassword: ['', [Validators.required]],
      type: ['company', [Validators.required]],
      companyName: ['', [Validators.required]],
    }, {
      validators: MyValidators.matchPasswords
    });

    this.typeField!.valueChanges
      .subscribe(value => {
        if (value === 'company') {
          this.companyNameField?.setValidators([Validators.required]);
        } else {
          this.companyNameField?.setValidators(null);
        }
        this.companyNameField?.updateValueAndValidity();
      });
  }

  get typeField() {
    return this.formRegister.get('type');
  }


  get companyNameField() {
    return this.formRegister.get('companyName');
  }

  get passwordField() {
    return this.formRegister.get('password')!;
  }

  get confirmPasswordField() {
    return this.formRegister.get('confirmPassword')!;
  }

  get emailField() {
    return this.formRegister.get('email')!;
  }

}
