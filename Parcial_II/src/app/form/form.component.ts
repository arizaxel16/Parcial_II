import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserDataComponent } from '../user-data/user-data.component';
import { AppointmentTypeSelectorComponent } from '../appointment-type-selector/appointment-type-selector.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { Router } from '@angular/router';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // referencia a subcomponentes y sus variables
  @ViewChild(UserDataComponent) userDataComponent: UserDataComponent | undefined;
  @ViewChild(AppointmentTypeSelectorComponent) appointmentTypeSelectorComponent: AppointmentTypeSelectorComponent | undefined;
  @ViewChild(CalendarComponent) calendarComponent: CalendarComponent | undefined;

  constructor(private router: Router) { }

  // logica validacion de formulario
  onSubmit() {
    // valida metodo de formulario valido de cada uno de los formularios
    if (this.userDataComponent && this.userDataComponent.isFormValid() && this.appointmentTypeSelectorComponent && this.appointmentTypeSelectorComponent.isFormValid() && this.calendarComponent && this.calendarComponent.isFormValid()) {
    
      // crea objeto ticket
      const ticket: Ticket = {
        name: this.userDataComponent.userForm.value.name,
        secondName: this.userDataComponent.userForm.value.secondName,
        surname: this.userDataComponent.userForm.value.surname,
        id: this.userDataComponent.userForm.value.id,
        tel: this.userDataComponent.userForm.value.tel,
        email: this.userDataComponent.userForm.value.email,
        appointmentType: this.appointmentTypeSelectorComponent.appointmentSelectForm.value.appointmentType,
        otherType: this.appointmentTypeSelectorComponent.appointmentSelectForm.value.otherType,
        date: this.calendarComponent.calendarForm.value.date,
      };

      // enruta a '/ticket' y pasa objeto ticket con los datos
      this.router.navigate(['/ticket'], { state: { ticket: ticket } });
    } else {
      alert("Some form fields are invalid, please check and re-send the form");
    }
  }
}
