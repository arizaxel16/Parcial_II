import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {

  // constantes visual
  readonly idInput_placeholder: String = "xxxxxxxxxx";
  readonly telInput_placeholder: String = "123-4567890";
  readonly emailInput_placeholder: String = "example@email.com";

  userForm: FormGroup;

  // constructor formulario con validaciones individuales
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      secondName: ['', [Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      surname: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      id: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      tel: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', Validators.email]
    });
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.userForm.valid;
  }
}