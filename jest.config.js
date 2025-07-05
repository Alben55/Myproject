module.exports = {
  // setupFilesAfterEnv: ['./jest.setup.js'],
  setupFiles: ['<rootDir>/tests/api/config/config.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/tests/e2e/', '/playwright-tests/'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        expand: true,
        openReport: true,
      },
    ],
  ],
};
