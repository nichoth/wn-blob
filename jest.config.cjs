module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json'
    }
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ]
};
