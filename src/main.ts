import {BehaviorSubject, from, of, Subject, timer} from "rxjs";
import {tap, map, switchMap} from "rxjs/operators"

// stream from array

const dataArray = ['a', 'b', 'c', 'd', 'e', 'f'];

const letter$ = from(dataArray)

letter$.pipe(
    tap(letter => console.log(`before filter ${letter}`))
)

// stream from one value

const point = 'a'

const point$ = of(point);

point$.pipe(
    tap(point => console.log(`start of pipe: ${point}`))
);


// subjects

const pet$ = new Subject()


// behavior subject

const isDisabled$ = new BehaviorSubject(false);


// timed observable

// starts after 1000 ms and emits every 1000ms
const number$ = timer(1000, 1000);
