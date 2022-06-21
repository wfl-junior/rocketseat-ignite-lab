import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4obx4h11sgu01z28pr8b4yq/master",
  cache: new InMemoryCache(),
});
