import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  myTicket: Ticket | undefined;

  name: string | undefined;
  secondName?: string;
  surname: string | undefined;
  id: string | undefined;
  tel: string | undefined;
  email?: string;
  appointmentType: string | undefined;
  otherType?: string;
  date: string | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.myTicket = navigation.extras.state['ticket'];
    }

    if (this.myTicket) {
      this.name = this.myTicket.name;
      this.secondName = this.myTicket.secondName;
      this.surname = this.myTicket.surname;
      this.id = this.myTicket.id;
      this.tel = this.myTicket.tel;
      this.email = this.myTicket.email;
      this.appointmentType = this.myTicket.appointmentType;
      this.otherType = this.myTicket.otherType;
      this.date = this.myTicket.date
    } else {
      this.name = "";
      this.secondName = "";
      this.surname = "";
      this.id = "";
      this.tel = "";
      this.email = "";
      this.appointmentType = "";
      this.otherType = "";
      this.date = "";
    }
  }

  navHome(){
    this.router.navigate(['/']);
  }

  generateCode(): number {
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  code = this.generateCode();
}
