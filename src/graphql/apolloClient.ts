import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });

  export default apolloClient;