// Import the module that will be mocked
const axios = require("axios");
const MovieSearch = require("../movieSearch");

// Mock the module by calling jest.mock("MODULE_NAME_GOES_HERE"). Now all
// methods of the module are mocked and spied on.
jest.mock("axios");

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      // Provide a fake result for the mocked axios.get() function
      axios.get.mockReturnValue(
        new Promise(function(resolve) {
          resolve({ data: {} });
        })
      );

      // Assert that movie.search() returned the correct data given that
      // axios.get() return the fake value assigned to the mock above.
      expect(movie.search(name)).resolves.toEqual({ data: {} });

      // Assert that axios.get was called with the correct parameter since
      // axios.get has been mocked out.
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
  });
});
