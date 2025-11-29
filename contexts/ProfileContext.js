import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../lib/api'
import { mockProfile } from '../lib/mockData'

const ProfileContext = createContext()

// Check if we should use mock data (default: true)
const useMockData = process.env.NEXT_PUBLIC_SHOW_MOCK_DATA !== 'false'

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    async function loadProfile() {
      try {
        if (useMockData) {
          // Use mock data, bypass API call
          console.log('Using mock profile data')
          setProfile(mockProfile)
          setError(null)
        } else {
          // Fetch from API
          console.log('Fetching profile from API...')
          const response = await api.get('/profile')
          console.log('Profile API response:', response.data)
          setProfile(response.data)
          setError(null)
        }
      } catch (err) {
        console.error('Failed to fetch profile:', err)
        console.error('Error details:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
          url: err.config?.url,
          baseURL: err.config?.baseURL
        })
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    loadProfile()
  }, [])
  
  return (
    <ProfileContext.Provider value={{ profile, loading, error }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider')
  }
  return context
}

