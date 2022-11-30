import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <script src="https://cdn.tailwindcss.com"></script>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
// pages/_app.js
