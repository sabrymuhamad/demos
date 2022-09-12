import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demos';
  isActive: boolean = false;

  reactiveForm = new FormGroup({
    dateControl: new FormControl(new Date(), [Validators.required]),
  });

  submit() {
    console.log(this.reactiveForm.value);
  }
}
