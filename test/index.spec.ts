import wnBlob from '../src'
import fs from 'fs'
import * as wn from 'webnative'




// import 'expect-puppeteer'

// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com')
//   })

//   it('should display "google" text on page', async () => {
//     await expect(page).toMatch('google')
//   })
// })

// page.browser().version().then(ver => console.log('verrrrr', ver))





import Blob from 'fetch-blob'
import File from 'fetch-blob/file.js'



// this is a node buffer
var buf = fs.readFileSync(__dirname + '/caracal.jpg')
let arraybuffer = Uint8Array.from(buf).buffer;

// console.log('window', window)
// page.evaluate((x, y) => console.log(x, y), 10, 11)

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

// describe('example', () => {
//     it('should do something', () => {
//         expect(true).toEqual(true)
//     })
// })

wn.initialise({ permissions: PERMISSIONS })
    .then(_wn => {
        describe('example', () => {
            it('should do something', () => {
                expect(wnBlob(_wn, 'test')).toEqual('test')
            })
        })
    })

