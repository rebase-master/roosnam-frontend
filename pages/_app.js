import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { ProfileProvider } from '../contexts/ProfileContext'
import { ThemeProvider } from '../contexts/ThemeContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProfileProvider>
    </ThemeProvider>
  )
}


