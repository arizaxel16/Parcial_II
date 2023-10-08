import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserDataComponent } from './user-data/user-data.component';
import { AppointmentTypeSelectorComponent } from './appointment-type-selector/appointment-type-selector.component';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Parcial_II';
  @ViewChild(UserDataComponent) userDataComponent: UserDataComponent | undefined;
  @ViewChild(AppointmentTypeSelectorComponent) appointmentTypeSelectorComponent: AppointmentTypeSelectorComponent | undefined;
  @ViewChild(CalendarComponent) calendarComponent: CalendarComponent | undefined;

  onSubmit() {
    if (this.userDataComponent && this.userDataComponent.isFormValid() && this.appointmentTypeSelectorComponent && this.appointmentTypeSelectorComponent.isFormValid() && this.calendarComponent && this.calendarComponent.isFormValid()) {
      // Perform form submission logic here
      console.log('Form submitted successfully:', this.userDataComponent.userForm.value, this.appointmentTypeSelectorComponent.appointmentSelectForm.value, this.calendarComponent.calendarForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
