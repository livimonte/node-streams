// process.stdin
//   .pipe(process.stdout)

import { OneToHundredStream } from './read.js'

new OneToHundredStream().pipe(process.stdout)
