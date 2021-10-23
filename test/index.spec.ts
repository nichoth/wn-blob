import wnBlob from '../src'
import fs from 'fs'

// this is a node buffer
var buf = fs.readFileSync(__dirname + '/caracal.jpg')
let arraybuffer = Uint8Array.from(buf).buffer;

const blob = new Blob([arraybuffer as BlobPart], {
    type: 'image/jpeg',
  });

var file = new File([blob], "caracal.jpg", { type: 'image/jpeg' });

console.log('file', file)

describe('example', () => {
    it('should do something', () => {
        expect(wnBlob('test')).toEqual('test')
    })
})
