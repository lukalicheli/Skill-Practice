import React from 'react';
// import the component and classes needed to setup apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

// Create a new instance of the imported ApolloClient class to implement the core client-side API and provide the uri of the GraphQL API so requests can be sent. Also, create a new instance of InMemoryCache to enable caching responses.
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Wrap all components in ApolloProvider so that ApolloCLient can be used anywhere to send requests.
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
