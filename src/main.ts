

// stream from array

import {from, of} from "rxjs";
import {tap, map, switchMap} from "rxjs/operators"

const dataArray = ['a', 'b', 'c', 'd', 'e', 'f'];

const stream = from(dataArray)

stream.pipe(
    tap(value => console.log(`before filter ${value}`))
)
