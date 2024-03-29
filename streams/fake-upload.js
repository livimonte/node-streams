import { OneToHundredStream } from './read.js'

fetch('http://localhost:3334', {
  method: 'POST',
  duplex: 'half',
  body: new OneToHundredStream(),
})
  .then((res) => res.text())
  .then((data) => console.log(data))
