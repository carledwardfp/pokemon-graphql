import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from 'contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <div className="bg-pokemonBg/20 py-4 min-h-[100vh] text-white">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
