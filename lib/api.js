import axios from 'axios'

// API base URL - must be set via NEXT_PUBLIC_API_URL environment variable
// Example values:
// Development: http://localhost:3000/api/v1
// Production: https://api.yourdomain.com/api/v1
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export const fetcher = url => api.get(url).then(res => res.data)

// Profile API
export const fetchProfile = async () => {
  const response = await api.get('/profile')
  return response.data
}


