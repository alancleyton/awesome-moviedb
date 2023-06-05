export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  clearMocks: true,
  testMatch: [
    '**/tests/**/*.ts?(x)',
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
