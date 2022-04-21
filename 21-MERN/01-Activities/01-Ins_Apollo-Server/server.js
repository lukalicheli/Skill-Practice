const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');

// Import the two parts of a GraphQL schema--typeDefs and resolvers.
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  // Create a new instance of the ApolloServer class. The ApolloServer class instance takes both typeDefs and resolvers as parameters.
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  // Start apollo server
  await server.start();

  // Apply apollo server middleware to express app.
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);


// The code for setting up apollo server was adapted from https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express.
