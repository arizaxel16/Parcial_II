import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-type-selector',
  templateUrl: './appointment-type-selector.component.html',
  styleUrls: ['./appointment-type-selector.component.css']
})
export class AppointmentTypeSelectorComponent {
  otherField_styleId: String = "othertype-input-disabled";
  otherField_enabledStatus: boolean = false;
  appointmentSelectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentSelectForm = this.fb.group({
      appointmentType: [{ value: 'Select', disabled: false }, Validators.required],
      otherType: [{ value: '', disabled: true }, this.getOtherTypeValidators()]
    });
  }

  onSelectChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === "other") {
      this.appointmentSelectForm.get('otherType')?.enable();
      this.otherField_enabledStatus = true;
      this.otherField_styleId = "othertype-input-enabled";
    } else {
      this.appointmentSelectForm.get('otherType')?.disable();
      this.appointmentSelectForm.get('otherType')?.setValue("");
      this.otherField_enabledStatus = false;
      this.otherField_styleId = "othertype-input-disabled";
    }
  }

  private getOtherTypeValidators(): Validators[] {
    if (!this.otherField_enabledStatus) {
      return [Validators.required, Validators.maxLength(150)];
    } else {
      return [];
    }
  }

  isFormValid(): boolean {
    return this.appointmentSelectForm.valid;
  }
}
