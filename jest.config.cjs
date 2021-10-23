module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  testRegex: "(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  preset: 'ts-jest',
  transformIgnorePatterns: ['node_modules/(?!(webnative|keystore-idb)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ]
};
