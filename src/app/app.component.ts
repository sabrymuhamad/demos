import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @HostListener('window:unload', ['$event'])
  // beforeunloadHandler(event:any): void {
  //  localStorage.removeItem('ssss')
  // }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");

}

  title = 'demos';
  constructor(private router: Router) {

    // this.expirationCheck();
    fromEvent(window, 'load').subscribe((res) => {

      console.log('load')
   
      // let user = sessionStorage.getItem('user');
      // console.log(user)
      // if (user) {
      //   this.router.navigate(['/shared/401'])
      // } else {
      //   sessionStorage.setItem('user', JSON.stringify({ name: 'sabry', id: 1 }))
      // }

    })
  }

  setSession() {
    let user = sessionStorage.getItem('user')
    if (!user) {
      sessionStorage.setItem('user', JSON.stringify({ name: 'sabry', id: 1 }))
    }
  }

  expirationCheck() {
    let storage = localStorage.getItem('expiry');

    if (!storage) {
      let ex = new Date(new Date().getTime() + 5 * 60000);
      localStorage.setItem('expiry', JSON.stringify(ex))
    }

  }


  // solution is to store the token in sessionStorage

}
