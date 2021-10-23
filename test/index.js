import wnBlob from '../src'
import fs from 'fs'
import * as wn from 'webnative/lib'
var test = require('tape')

const PERMISSIONS = {
    app: {
        name: "test",
        creator: "nichoth",
    },
    fs: {
        public: [wn.path.directory("Apps", "Fission", "test")],
    }
};

var _wn
var file
test('setup', t => {
    // this is a node buffer
    var buf = fs.readFileSync(__dirname + '/caracal.jpg')
    let arraybuffer = Uint8Array.from(buf).buffer;

    const blob = new Blob([arraybuffer], {
        type: 'image/jpeg',
    })

    file = new File([blob], "caracal.jpg", { type: 'image/jpeg' });

    wn.initialise({ permissions: PERMISSIONS })
        .then(__wn => {
            _wn = __wn
            t.end()
        })
})

test('save a blob', t => {
    console.log('file.name', file.name)
    t.end()
})
