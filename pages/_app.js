import "../styles/globals.css"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Navbar />
    </div>
  )
}

export default MyApp
