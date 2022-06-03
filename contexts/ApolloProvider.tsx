import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL || 'https://graphql-pokemon2.vercel.app',
})

// Cache implementation
const cache = new InMemoryCache()

// Instantiating an apollo client
const client = new ApolloClient({
  link: httpLink,
  cache,
})

const IApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default IApolloProvider
