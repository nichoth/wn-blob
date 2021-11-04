const Environment = require('jest-environment-jsdom');
var u = require('util')

/**
 * A custom environment to set the TextEncoder that is required by TensorFlow.js.
 */
module.exports = class CustomTestEnvironment extends Environment {
    async setup() {
        await super.setup();
        if (typeof this.global.TextEncoder === 'undefined') {
            this.global.TextEncoder = u.TextEncoder;
        }

        if (typeof this.global.TextDecoder === 'undefined') {
            this.global.TextDecoder = u.TextDecoder
        }
    }
}
