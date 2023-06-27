module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/utils/fileMock.js",
    "^@global/(.*)$": "<rootDir>/src/global/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
};
