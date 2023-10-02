import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  minDate: string | undefined;
  maxDate: string | undefined;

  ngOnInit() {
    // Get the current date
    const currentDate: Date = new Date();

    // Calculate the date for tomorrow
    const tomorrow: Date = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);

    // Calculate the date two months from now
    const maxDate: Date = new Date(currentDate);
    maxDate.setMonth(currentDate.getMonth() + 2);

    // Format the dates as YYYY-MM-DD
    this.minDate = this.formatDate(tomorrow);
    this.maxDate = this.formatDate(maxDate);
  }

  // Function to format date as YYYY-MM-DD
  private formatDate(date: Date): string {
    const yyyy: number = date.getFullYear();
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const dd: string = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  numDate: Number | undefined;
  monthDate: string | undefined;

  onDateChange(event: Event) {
    const selectedDate: string = (event.target as HTMLInputElement).value;
    const dateObject: Date = new Date(selectedDate);

    const monthNumber: number = dateObject.getMonth();    
    const monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    
    this.numDate = dateObject.getDate()+1;
    this.monthDate = monthNames[monthNumber];
  }
}