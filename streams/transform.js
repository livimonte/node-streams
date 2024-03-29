import { Writable, Transform } from 'node:stream'
import { OneToHundredStream } from './read.js'

export class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformToNegative = Number(chunk.toString().replace(',', '')) * -1
    callback(null, Buffer.from(String(transformToNegative)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream().pipe(new InverseNumberStream()).pipe(new MultiplyByTenStream())
