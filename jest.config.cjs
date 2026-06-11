module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': '<rootDir>/src/__tests__/styleMock.js'
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.spec.js'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.js']
}
