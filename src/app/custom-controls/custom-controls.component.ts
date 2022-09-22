import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-controls',
  templateUrl: './custom-controls.component.html',
  styleUrls: ['./custom-controls.component.scss']
})
export class CustomControlsComponent implements OnInit {
  customInput:string;
  constructor() { }

  ngOnInit(): void {
  }

  isActive: boolean = false;

  reactiveForm = new FormGroup({
    dateControl: new FormControl(new Date(), [Validators.required]),
  });

  submit() {
    console.log(this.reactiveForm.value);
  }

  onFocus(e:any){
    console.log(e)
  }

}
