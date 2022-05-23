import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppEnv } from '../utils/environment'

function MyApp({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />
}

export default MyApp
