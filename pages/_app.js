import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { ProfileProvider } from '../contexts/ProfileContext'

export default function App({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProfileProvider>
  )
}


