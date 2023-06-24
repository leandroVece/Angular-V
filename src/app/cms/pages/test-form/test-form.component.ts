import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  getValue() {
    console.log(this.nameField);
  }

  save() {
    console.log(this.form.value)
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user: this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(10)]],
        email: [''],
        phone: [''],
      }),
      color: ['#000000'],
      date: [''],
      month: [''],
      age: [12],
      password: [''],
      price: ['50'],
      week: [''],
      time: [''],
      search: [''],
      description: [''],
      category: ['Category 1'],
    })
  }



  get nameField() {
    return this.form.get('name')!;
  }
  get emailField() {
    return this.form.get('email')!;
  }
  get phoneField() {
    return this.form.get('phone')!;
  }
  get colorField() {
    return this.form.get('color')!;
  }
  get dateField() {
    return this.form.get('date')!;
  }
  get monthField() {
    return this.form.get('month')!;
  }
  get ageField() {
    return this.form.get('age')!;
  }
  get passwordField() {
    return this.form.get('password')!;
  }
  get priceField() {
    return this.form.get('price')!;
  }
  get timefield() {
    return this.form.get('time')!;
  }
  get searchField() {
    return this.form.get('search')!;
  }
  get weekField() {
    return this.form.get('week')!;
  }
  get descriptionField() {
    return this.form.get('description')!;
  }
  get categoryField() {
    return this.form.get('category')!;
  }

  get isNameFielValid() {
    return this.nameField.valid && this.nameField.touched;
  }
  get isNameFielInvalid() {
    return this.nameField.invalid && this.nameField.touched;
  }

}
