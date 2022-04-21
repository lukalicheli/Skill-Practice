const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Create a movie
app.post("/api/new-movie", (req, res) => {
  res.json({
    message: "success",
    data: {
      id: 1,
      movie_name: "Placeholder Movie Title",
    },
  });
});

// TODO: Read all movies
app.get("/api/movies", (req, res) => {
  res.json({
    message: "success",
    data: [
      {
        id: 1,
        movie_name: "Placeholder Movie Title",
      },
    ],
  });
});

// TODO: Delete a movie
app.delete("/api/movie/:id", (req, res) => {
  res.json({
    message: "deleted",
    changes: 1, // TODO: replace with count of deleted movies
    id: req.params.id,
  });
});

// TODO: Read list of all reviews and associated movie name using LEFT JOIN
app.get("/api/movie-reviews", (req, res) => {
  res.json({
    message: "success",
    // TODO: replace placeholder data with result from the database
    data: [
      {
        id: 1,
        movie: "Placeholder Movie Title",
        review: "Placeholder movie review.",
      },
    ],
  });
});

// BONUS: Update review
app.put("/api/review/:id", (req, res) => {
  res.json({
    message: "success",
    data: req.body,
    // TODO: replace 1 with affected row count from query result
    changes: 1,
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).json({
    message: "Resource not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
