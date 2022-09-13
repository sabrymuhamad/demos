import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-any-component',
  templateUrl: './any-component.component.html',
  styleUrls: ['./any-component.component.scss']
})
export class AnyComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  crash() {
    let txt = "a";
    while (1) {
      txt = txt += "a";
    }
  }





}
