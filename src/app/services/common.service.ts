import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  fromEvent,
  interval,
  merge,
  Observable,
  of,
  Subject,
  Subscription,
  throwError,
  pipe,
  range,
  timer,
  combineLatest,
} from 'rxjs';
import {
  catchError,
  filter,
  map,
  skipWhile,
  takeWhile,
  scan,
  startWith,
  switchMap,
  mergeMap,
  take,
  tap,
  takeUntil,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() { }

  pipe() {
    /* For example, RxJS defines operators such as map(), filter(), concat(), and flatMap().
    You can use pipes to link operators together. Pipes let you combine multiple functions into a single function.
    The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, runs the composed functions in sequence. */
    const source$: Observable<number> = range(0, 10);
    source$
      .pipe(
        map((x) => x * 2),
        filter((x) => x % 3 === 0)
      )
      .subscribe((x) => console.log(x));
  }

  tap() {
    // You can think of it as if observable was an array over time, then tap() would be an equivalent to Array.forEach()
    // the biggest benefit is tap doesn't affect the final output
    of(1, 2, 3, 4, 5, 6)
      .pipe(
        tap((value) => {
          value = value + 1;
          console.log('From tap ' + value);
        })
      )
      .subscribe((value) => {
        console.log('From Subscribe ' + value);
      });
  }

  emptyOp() {
    // A simple Observable that only emits the complete notification. It can be used for composing with other Observables, such as in a mergeMap.
    return EMPTY.pipe(
      startWith(7),
      map((x) => x * 2)
    );
  }

  startWithOp() {
    of(1, 2, 3, 4).pipe(startWith(3)).subscribe((res) => {
      console.log(res)
    })
  }

  mergeMap() {
    // It creates a new inner observable for every value it receives from the Source observable

    let srcObservable = of(1, 2, 3, 4);
    let innerObservable = of('A', 'B', 'C', 'D');

    srcObservable
      .pipe(
        mergeMap((val) => {
          console.log('Source value ' + val);
          console.log('starting new observable');
          return innerObservable;
        })
      )
      .subscribe((ret) => {
        console.log('Recd ' + ret);
      });
  }

  switchMapOp() {
    // It creates a new inner observable for every value it receives from the Source observable
    // Main difference between switchMap and any other flatten operator is SWITCHMAP can handle 1 observable at a time and cancel all previous observable
    // it ends the previous observable and starts a new one.
    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);
  }

  mergeOp() {
    let list1 = of(1, 2, 3, 4, 5);
    let list2 = of(4, 5, 6, 7, 8, 9, 10);
    let final_val = merge(list1, list2);
    final_val.subscribe((x) => console.log(x));
  }

  takeUntilOp() {
    // completes the subscription of source when timer emits

    //emit value every 1s
    const source = interval(1000);
    //after 5 seconds, emit value
    const timer$ = timer(5000);
    //when timer emits after 5s, complete source
    const example = source.pipe(takeUntil(timer$));
    //output: 0,1,2,3
    const subscribe = example.subscribe(console.log);
  }

  takeWhileOp() {
    // Like filter operator but this will complete with the first different value

    // emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
    const source$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

    // allow values until value from source equals 3, then complete
    source$
      .pipe(takeWhile((it) => it === 3))
      // log: 3, 3, 3
      .subscribe((val) => console.log('takeWhile', val));

    source$
      .pipe(filter((it) => it === 3))
      // log: 3, 3, 3, 3, 3, 3, 3
      .subscribe((val) => console.log('filter', val));
  }

  skipWhileOp() {
    // Like filter operator but this will complete with the first different value

    // emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
    const source$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

    // skip values until value from source not equals 3, then complete
    source$
      .pipe(skipWhile((it) => it === 3))
      // log: 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
      .subscribe((val) => console.log('skipWhile ', val));

    source$
      .pipe(filter((it) => it === 3))
      // log: 3, 3, 3, 3, 3, 3, 3
      .subscribe((val) => console.log('filter', val));
  }

  takeOp() {
    // in this example, it takes only the first 5 seconds of the infinite interval
    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe((x) => console.log(x));
  }

  scanOp() {
    const subject = new Subject();
    //scan example building an object over time
    const example = subject.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
    //log accumulated values
    const subscribe = example.subscribe((val) =>
      console.log('Accumulated object:', val)
    );
    //next values into subject, adding properties to object
    // {name: 'Joe'}
    subject.next({ name: 'Joe' });
    // {name: 'Joe', age: 30}
    subject.next({ age: 30 });
    // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    subject.next({ favoriteLanguage: 'JavaScript' });
  }

  combinLatestOp() {
    // timerOne emits first value at 1s, then once every 4s
    const timerOne$ = timer(1000, 4000);
    // timerTwo emits first value at 2s, then once every 4s
    const timerTwo$ = timer(2000, 4000);
    // timerThree emits first value at 3s, then once every 4s
    const timerThree$ = timer(3000, 4000);


    // when one timer emits, emit the latest values from each timer as an array
    combineLatest([timerOne$, timerTwo$, timerThree$])
    .pipe(take(1),
    switchMap(([timerOne, timerTwo, timerThree])=>{
      console.log(timerOne)
      return of(false)
    })
    ).subscribe()
    // .subscribe(
    //   ([timerValOne, timerValTwo, timerValThree]) => {
    //     /*
    //       Example:
    //     timerThree first tick: 'Timer One Latest: 0, Timer Two Latest: 0, Timer Three Latest: 0
    //     timerOne second tick: 'Timer One Latest: 1, Timer Two Latest: 0, Timer Three Latest: 0
    //     timerTwo second tick: 'Timer One Latest: 1, Timer Two Latest: 1, Timer Three Latest: 0
    //   */
    //     console.log(
    //       `Timer One Latest: ${timerValOne},
    //         Timer Two Latest: ${timerValTwo},
    //         Timer Three Latest: ${timerValThree}`
    //     );
    //   }
    // );
  }
}
