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
        public: [ webnative.path.directory("test") ],
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
        .then(state => {
            console.log('state', state)
            if (state.scenario === webnative.Scenario.NotAuthorised) {
                console.log('**redirecting**')
                console.log('**cypto**', window.crypto.subtle)
                console.log('sign', window.crypto.subtle.sign)
                webnative.redirectToLobby(state.permissions)
                    .then(res => {
                        console.log('**res**', res)
                        t.end()
                    })
                    .catch(err => {
                        console.log('**err**', err)
                        t.end()
                    })
            } else {
                console.log('**else**', webnative.Scenario)
                t.end()
            }
        })
        .catch(err => {
            console.log('oh no', err)
            t.end()
        })
})

test('save a blob', t => {
    console.log('file.name', file.name)
    console.log('wn', wn)
    const { fs } = wn
    var aaa = fs.write(fs.appPath(wn.path.file(file.name)), file)
    console.log('aaa', aaa)
    t.end()
})
