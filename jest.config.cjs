module.exports = {
  verbose: true,
  // testEnvironment: "jsdom",
  testRegex: "(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  // preset: 'ts-jest',
  "preset": "jest-puppeteer",
  // transformIgnorePatterns: ['node_modules/(?!(webnative|keystore-idb)/)'],
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  // },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  // testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ]
};
