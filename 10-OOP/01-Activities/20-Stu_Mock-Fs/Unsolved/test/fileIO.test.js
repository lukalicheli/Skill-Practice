// TODO: import the fs module so it can be mocked

const FileIO = require('../fileIO');

// TODO: mock the fs module

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Create an instance of FileIO
      // TODO: fs.readFileSync mock should return the string "Hello World!"
      // TODO: call the .read() method of the FileIO instance being tested
      // TODO: assert that the result of .red() is "Hello World!"
      // TODO: assert the fs.readFileSync was called with the correct arguments
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here. Hint: how can the pattern used in the test for
      // read help you write this test?
    });
  });

  // BONUS: add test for append
});
