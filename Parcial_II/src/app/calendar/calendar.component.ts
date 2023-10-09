import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarForm: FormGroup;

  // constructor de formulario
  constructor(private fb: FormBuilder) {
    this.calendarForm = this.fb.group({
      date: ['', Validators.required],
    });
  }

  // variables de limite de calendario
  minDate: string | undefined;
  maxDate: string | undefined;

  ngOnInit() {
    // fecha actual
    const currentDate: Date = new Date();

    // fecha limite minimo
    const tomorrow: Date = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);

    // fecha limite maximo
    const maxDate: Date = new Date(currentDate);
    maxDate.setMonth(currentDate.getMonth() + 2);

    // formato YYYY-MM-DD
    this.minDate = this.formatDate(tomorrow);
    this.maxDate = this.formatDate(maxDate);
  }

  // formatea => YYYY-MM-DD
  private formatDate(date: Date): string {
    const yyyy: number = date.getFullYear();
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const dd: string = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // variables update visual DOM
  numDate: Number | undefined;
  monthDate: string | undefined;

  // event listener cambio de fecha en datePicker
  onDateChange(event: Event) {
    const selectedDate: string = (event.target as HTMLInputElement).value;
    const dateObject: Date = new Date(selectedDate);

    const monthNumber: number = dateObject.getMonth();
    const monthNames: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // numero a varibles para display
    this.numDate = dateObject.getDate() + 1;
    this.monthDate = monthNames[monthNumber];
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.calendarForm.valid;
  }
}
