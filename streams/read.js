import { Readable } from 'node:stream'

export class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++
    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const idx = i === 100 ? i : `${i},`
        const idxBuffer = Buffer.from(String(idx))

        console.log(idxBuffer)

        this.push(idxBuffer)
      }
    }, 50)
  }
}
