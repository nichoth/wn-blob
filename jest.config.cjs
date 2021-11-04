module.exports = {
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",
  verbose: true,
  // testEnvironment: "jsdom",
  testRegex: "(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  preset: 'ts-jest',
  transformIgnorePatterns: ['node_modules/(?!(webnative|keystore-idb)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  // testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ]
};
