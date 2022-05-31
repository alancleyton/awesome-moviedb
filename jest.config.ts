export default {
  roots: ['<rootDir>/src'],
  resetMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/tests/setup.ts'],
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!src/main.ts',
    '!src/**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: false,
            dynamicImport: false,
          },
          keepClassNames: true,
          transform: {
            react: {
              pragma: 'React.createElement',
              pragmaFrag: 'React.Fragment',
              throwIfNamespace: true,
              development: false,
              useBuiltins: false,
              runtime: 'automatic',
            },
            hidden: {
              jest: true,
            },
          },
        },
        module: {
          type: 'commonjs',
          strict: false,
          strictMode: false,
          lazy: false,
          noInterop: false,
        },
      },
    ],
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  ],
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
