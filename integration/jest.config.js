module.exports = {
  preset: "jest-puppeteer",
  testRegex: "./*\\.test\\.js$",
  setupFilesAfterEnv: ["./setupTests.js"],
  globals: {
    "babel-jest": {
      babelrcFile: ".babelrc",
    },
  },
};
