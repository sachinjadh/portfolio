import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Component {...pageProps} />
    </div>
  )
}
