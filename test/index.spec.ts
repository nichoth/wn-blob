import wnBlob from '../src'
import fs from 'fs'
import * as wn from 'webnative'

// this is a node buffer
var buf = fs.readFileSync(__dirname + '/caracal.jpg')
let arraybuffer = Uint8Array.from(buf).buffer;

const blob = new Blob([arraybuffer as BlobPart], {
    type: 'image/jpeg',
});

var file = new File([blob], "caracal.jpg", { type: 'image/jpeg' });

console.log('file.name', file.name)

const PERMISSIONS = {
    app: {
        name: "test",
        creator: "Fission",
    },
    fs: {
        public: [wn.path.directory("Apps", "Fission", "test")],
    },
};

wn.initialise({ permissions: PERMISSIONS })
    .then(_wn => {
        describe('example', () => {
            it('should do something', () => {
                expect(wnBlob(_wn, 'test')).toEqual('test')
            })
        })
    })

