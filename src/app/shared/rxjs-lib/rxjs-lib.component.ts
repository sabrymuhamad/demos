import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-rxjs-lib',
  templateUrl: './rxjs-lib.component.html',
  styleUrls: ['./rxjs-lib.component.scss'],
})
export class RxjsLibComponent implements OnInit {
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    // this.common.emptyOp().subscribe({
    //   next: (res) => console.log(res),
    //   complete: () => console.log('Complete!')
    // });

    this.common.combinLatestOp();
  }
}
