import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_APOLLO_SERVER_GATEWAY,
});

const errorLink = new onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map((errors) =>
      console.log(
        `[GraphQL error]: Message: ${errors.errors[0].message}, Name: ${errors.errors[0].name}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  if (sessionStorage.getItem('token') === null) {
    return {
      headers,
    }
  }
  const context = {
    headers: {
      ...headers,
      Authorization: `bearer ${sessionStorage.getItem('token')}`
    }
  }
  return context;
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, authLink, httpLink])
});

export default client;