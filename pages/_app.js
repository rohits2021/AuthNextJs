import '../styles/globals.css'
import '../styles/Navbar.css'
import Navbar from '../components/Navbar.js'
import { SessionProvider } from "next-auth/react"
// import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  // console.log(process.env.GITHUB_ID,process.env.GITHUB_SECRET)
  return (
    <>
      <SessionProvider>
        <Navbar/>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )

}

export default MyApp
