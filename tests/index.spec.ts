// const puppeteer = require('puppeteer');
// import { Blob } from 'blob-polyfill';
// import {Blob} from 'node:buffer';
import expect from "expect"
import wnBlob from '../src'
// import fs from 'fs'
import * as wn from 'webnative'
// import { before, after } from 'mocha'



// var global = { browser: null }

// const opts = {
//     headless: false,
//     slowMo: 100,
//     timeout: 10000
// };

// // expose variables
// before (async function () {
//     global.browser = await puppeteer.launch(opts);
// });

// after (function () {
//     global.browser.close();
// });

// describe('example', () => {
//     it('should do something', () => {
//         expect(true).toEqual(true)
//     })
// })




// this is a node buffer
// var buf = fs.readFileSync(__dirname + '/caracal.jpg')
// let arraybuffer = Uint8Array.from(buf).buffer;

// const blob = new Blob([arraybuffer as BlobPart], {
//     type: 'image/jpeg',
// });

const blob = new Blob(['ok'])

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

