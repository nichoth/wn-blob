// import wnBlob from '../dist'
// import fs from 'fs'
// var fs = require('fs')
// import * as webnative from 'webnative/lib'
// import * as localforage from "localforage";
var test = require('tape')

var wn = window.webnative

test('example', async t => {
    t.equal(2, 2, 'should be an example')
    console.log('webnative.apps', window.webnative.apps)
    // console.log('index', await webnative.apps.index())

    console.log('create', await wn.apps.create('foooo'))

    t.end()
})

var file
test('setup', t => {
    const blob = new Blob(['ok'], {
        type: 'image/jpeg',
    })

    file = new File([blob], "ok.jpg", { type: 'image/jpeg' });

    const PERMISSIONS = {
        app: {
            name: "test",
            creator: "nichoth",
        },
        fs: {
            public: [ wn.path.directory('test') ],
        }
    };

    wn.initialise({ permissions: PERMISSIONS })
        .then(state => {
            console.log('**state**', state)

            if (state.scenario === wn.Scenario.NotAuthorised) {
                console.log('**redirecting**')
                console.log('**cypto**', window.crypto.subtle)
                // console.log('sign', window.crypto.subtle.sign)
                return wn.redirectToLobby(state.permissions)
                    .then(res => {
                        console.log('**redirect**', res)
                        t.end()
                    })
                    .catch(err => {
                        console.log('**err**', err)
                    })
            } else {
                console.log('**else**', wn.Scenario)
            }

            t.end()
        })
        .catch(err => {
            t.end()
        })

})


// import { createInMemoryIPFS } from "./helpers/in-memory-ipfs"
// import * as ipfsConfig from "webnative/lib/ipfs/config.js"

// var ipfs = await createInMemoryIPFS()

// const PERMISSIONS = {
//     app: {
//         name: "test",
//         creator: "nichoth",
//     },
//     fs: {
//         public: [ webnative.path.directory('test') ],
//     }
// };

// var wn
// var file
// test('setup', t => {
//     // console.log('process.env.ucan', !!process.env.UCAN)
//     // console.log('path directory', webnative.path.directory('test'))

//     // console.log('fs', fs)
//     // this is a node buffer
//     // var buf = fs.readFileSync(__dirname + '/caracal.jpg')
//     // let arraybuffer = Uint8Array.from(buf).buffer;

//     const blob = new Blob(['ok'], {
//         type: 'image/jpeg',
//     })

//     file = new File([blob], "ok.jpg", { type: 'image/jpeg' });

//     // var ucan = JSON.parse(process.env.UCAN)

//     // localforage.setItem("ucan", ucan)
//     //     .then(() => {
//     //         console.log('set ucan', !!ucan)
//     //     })
//     //     .then(() => init())
//     //     .then(() => t.end())
//     //     .catch(() => t.end())


//     init()

//     function init () {
//         return webnative.initialise({ permissions: PERMISSIONS })
//             .then(state => {
//                 console.log('state', state)
//                 if (state.scenario === webnative.Scenario.NotAuthorised) {
//                     console.log('**redirecting**')
//                     console.log('**cypto**', window.crypto.subtle)
//                     console.log('sign', window.crypto.subtle.sign)
//                     return webnative.redirectToLobby(state.permissions)
//                         .then(res => {
//                             console.log('**res**', res)
//                         })
//                         .catch(err => {
//                             console.log('**err**', err)
//                         })
//                 } else {
//                     console.log('**else**', webnative.Scenario)
//                 }
//             })
//     }
// })


// test('save a blob', t => {
//     console.log('file.name', file.name)
//     console.log('wn', wn)
//     const { fs } = wn
//     var aaa = fs.write(fs.appPath(wn.path.file(file.name)), file)
//     console.log('aaa', aaa)
//     t.end()
// })
