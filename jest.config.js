module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    moduleNameMapper: {
        '^@/pages(.*)$': '<rootDir>/pages$1',
        '^@/components(.*)$': '<rootDir>/src/components$1',
        '^@/constants(.*)$': '<rootDir>/src/constants$1',
        '^@/helpers(.*)$': '<rootDir>/src/helpers$1',
        '^@/models(.*)$': '<rootDir>/src/models$1',
        '^@/state(.*)$': '<rootDir>/src/state$1',
        '^@/styles(.*)$': '<rootDir>/src/styles$1',
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/__tests__/*.(ts|tsx)'],
    setupFiles: ['./jest.setup.js'],
    testPathIgnorePatterns: ['./.next/', './node_modules/'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
};
