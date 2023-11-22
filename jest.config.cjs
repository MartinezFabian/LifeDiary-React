/* eslint-disable no-undef */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/mocks/css.js',
  },
};
