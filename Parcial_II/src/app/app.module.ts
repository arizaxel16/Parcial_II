import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointmentTypeSelectorComponent } from './appointment-type-selector/appointment-type-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDataComponent,
    CalendarComponent,
    AppointmentTypeSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
