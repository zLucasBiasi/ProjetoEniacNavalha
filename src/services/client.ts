import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cllfyurya5f9f01t9b0cig1ee/master",
  cache: new InMemoryCache(),
});

export default client;
