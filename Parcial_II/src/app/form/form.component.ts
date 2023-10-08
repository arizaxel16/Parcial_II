import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserDataComponent } from '../user-data/user-data.component';
import { AppointmentTypeSelectorComponent } from '../appointment-type-selector/appointment-type-selector.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild(UserDataComponent) userDataComponent: UserDataComponent | undefined;
  @ViewChild(AppointmentTypeSelectorComponent) appointmentTypeSelectorComponent: AppointmentTypeSelectorComponent | undefined;
  @ViewChild(CalendarComponent) calendarComponent: CalendarComponent | undefined;

  constructor(private router: Router) { }

  onSubmit() {
    if (this.userDataComponent && this.userDataComponent.isFormValid() && this.appointmentTypeSelectorComponent && this.appointmentTypeSelectorComponent.isFormValid() && this.calendarComponent && this.calendarComponent.isFormValid()) {
      console.log('Form submitted successfully:', this.userDataComponent.userForm.value, this.appointmentTypeSelectorComponent.appointmentSelectForm.value, this.calendarComponent.calendarForm.value);
    
      // Navigate to the '/ticket' route
      this.router.navigate(['/ticket']);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
