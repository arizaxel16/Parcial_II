import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-type-selector',
  templateUrl: './appointment-type-selector.component.html',
  styleUrls: ['./appointment-type-selector.component.css']
})
export class AppointmentTypeSelectorComponent {
  // variables de clase
  otherField_styleId: String = "othertype-input-disabled";
  otherField_enabledStatus: boolean = false;
  appointmentSelectForm: FormGroup;

  // constructor de formulario
  constructor(private fb: FormBuilder) {
    this.appointmentSelectForm = this.fb.group({
      // tipo de cita (deshabilita opcion select)
      appointmentType: [{ value: 'Select', disabled: false }, Validators.required],
      // logica de desactivacion
      otherType: [{ value: '', disabled: true }, this.getOtherTypeValidators()]
    });
  }

  // event listener cambio de valor genera logica de 'enable'
  onSelectChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === "other") { // habilita
      this.appointmentSelectForm.get('otherType')?.enable();
      this.otherField_enabledStatus = true;
      this.otherField_styleId = "othertype-input-enabled";
    } else { // deshabilita
      this.appointmentSelectForm.get('otherType')?.disable();
      this.appointmentSelectForm.get('otherType')?.setValue("");
      this.otherField_enabledStatus = false;
      this.otherField_styleId = "othertype-input-disabled";
    }
  }

  // cambia logica de validacion de formulario
  private getOtherTypeValidators(): Validators[] {
    if (!this.otherField_enabledStatus) {
      return [Validators.required, Validators.maxLength(150)];
    } else {
      return [];
    }
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.appointmentSelectForm.valid;
  }
}
