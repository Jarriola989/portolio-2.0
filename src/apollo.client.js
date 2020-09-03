import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GITHUB_TOKEN } from "./constants";

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});
