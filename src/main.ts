import {BehaviorSubject, from, of, Subject, timer, combineLatest} from "rxjs";
import {tap, map, switchMap, filter, shareReplay, share, delay, mergeMap, take} from "rxjs/operators";
import {first} from "rxjs/internal/operators/first"
import {reduce} from "rxjs/internal/operators/reduce"

// stream from array

const dataArray = ['a', 'b', 'c', 'd', 'e', 'f'];

const letter$ = from(dataArray)
/*
const second$ = of('this string')

const mappedLetter$ = letter$.pipe(
    delay(1000),
    filter(letter => letter === 'a' || letter === 'b'),
    tap(letter => console.log('after filter ' + letter)),
    map(letter => letter + '1'),
    switchMap(letter => second$),
    share()
);

const combined$ = combineLatest(mappedLetter$, second$).pipe(
    map(([letter, second]) => letter + second)
);

combined$.subscribe(value => console.log(value));*/
/*

mappedLetter$.subscribe(value => {
    console.log("first subscribe: " + value);
});

mappedLetter$.subscribe(value => {
    console.log("second subscribe: " + value);
});
*/

// stream from one value

const point = 'a'

const point$ = of(point);

point$.pipe(
    tap(point => console.log(`start of pipe: ${point}`))
);


// subjects

const pet$ = new Subject()

const plant$ = new Subject()

const firstPlant$ = plant$.pipe(first())

const mappedPet$ = pet$.pipe(
    mergeMap(pet => {
        if (pet === 'dog') {
            return of(pet)
        } else {
            return firstPlant$
        }
    })
);
/*
mappedPet$.subscribe(pet => console.log(`1st pets subscribe: ${pet}`))
mappedPet$.subscribe(pet => console.log(`2nd pets subscribe: ${pet}`))

pet$.next('dog')
pet$.next('cat')
plant$.next('flower')
plant$.next('tree')
plant$.next('einhorn')*/


// behavior subject

const isDisabled$ = new BehaviorSubject(false);

console.log("isDisabled: " + isDisabled$.getValue())

/*isDisabled$.subscribe(isDisabled => {
    console.log("subscribe is disabled: " + isDisabled)
});*/

isDisabled$.next(true);

// timed observable

// starts after 1000 ms and emits every 1000ms
const number$ = timer(1000, 1000);

const filteredNumber$ = number$.pipe(
    take(5),
    filter(number => number % 2 === 0),
    reduce((total, value) => total + value)
);

filteredNumber$.subscribe(number => console.log(`subscribe: ${number}`))

console.log("End of File!");
