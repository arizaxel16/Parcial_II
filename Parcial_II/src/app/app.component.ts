import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserDataComponent } from './user-data/user-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Parcial_II';
  @ViewChild(UserDataComponent) childComponent: UserDataComponent | undefined;

  onSubmit() {
    if (this.childComponent && this.childComponent.isFormValid()) {
      // Perform form submission logic here
      console.log('Form submitted successfully:', this.childComponent.userForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
