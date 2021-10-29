// var test = require('tape')

// test('test', t => {
//     t.equal(true, true, 'example')
//     t.end()
// })


import wnBlob from '../dist'
// import fs from 'fs'
// var fs = require('fs')
import * as webnative from 'webnative/lib'
var test = require('tape')

const PERMISSIONS = {
    app: {
        name: "test",
        creator: "nichoth",
    },
    fs: {
        public: [webnative.path.directory("Apps", "Fission", "test")],
    }
};

var wn
var file
test('setup', t => {
    // console.log('fs', fs)
    // this is a node buffer
    // var buf = fs.readFileSync(__dirname + '/caracal.jpg')
    // let arraybuffer = Uint8Array.from(buf).buffer;

    const blob = new Blob(['ok'], {
        type: 'image/jpeg',
    })

    file = new File([blob], "ok.jpg", { type: 'image/jpeg' });

    webnative.initialise({ permissions: PERMISSIONS })
        .then(_wn => {
            console.log('______wnn', _wn)
            wn = _wn
            t.end()
        })
})

test('save a blob', t => {
    console.log('file.name', file.name)
    const { fs } = wn
    console.log('wn', wn)
    var aaa = fs.write(fs.appPath(wn.path.file(file.name)), file)
    console.log('aaa', aaa)
    t.end()
})
