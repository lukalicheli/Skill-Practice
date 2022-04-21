const Word = require("../lib/Word");
const Letter = require("../lib/Letter");

describe("Word class", () => {
  describe("constructor", () => {
    it.skip("initializes letters property with array of Letter objects", () => {
      const word = new Word("hi");
      const expectedLetters = [new Letter("h"), new Letter("i")];
      expect(word.letters).toEqual(expectedLetters);
    });
  });

  describe("getSolution", () => {
    it.skip("should return a string for the solved word", () => {
      const word = new Word("Hi");
      const actual = word.getSolution();
      expect(actual).toBe("Hi");
    });
  });

  describe("guessLetter", () => {
    it.skip("returns true when guessed letter is in letters", () => {
      const word = new Word("fish");
      const result = word.guessLetter("i");
      expect(result).toBe(true);
    });

    it.skip("returns false when guessed letter is not letters", () => {
      const word = new Word("fish");
      const result = word.guessLetter("l");
      expect(result).toBe(false);
    });
  });

  describe("guessedCorrectly ", () => {
    it.skip("returns true if all letters are correct", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("i");
      expect(word.guessedCorrectly()).toBe(true);
    });

    it.skip("returns false if at least one letter is incorrect", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("a");
      expect(word.guessedCorrectly()).toBe(false);
    });
  });

  describe("toString", () => {
    it.skip("should print '_' for letters and numbers that haven't been guessed", () => {
      const word = new Word("H");
      const actual = word.toString();
      expect(actual).toBe("_");
    });

    it.skip("should not use '_' for guessed letters and numbers.", () => {
      const word = new Word("H");
      word.guessLetter("H");
      const actual = word.toString();
      expect(actual).toBe("H");
    });

    it.skip("should include spaces between each character", () => {
      const word = new Word("Hi");
      word.guessLetter("H");
      const actual = word.toString();
      expect(actual).toBe("H _");
    });
  });
});
