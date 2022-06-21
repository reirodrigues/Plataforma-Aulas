import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o22xtx05vv01xx41r53e4j/master',
  cache: new InMemoryCache()
})