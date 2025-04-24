import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost',
});

const authLink = setContext((_, { headers: headers }) => {
  // Add authorization token if needed
  // const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      //authorization: token ? `Bearer ${token}` : "",
    }
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});