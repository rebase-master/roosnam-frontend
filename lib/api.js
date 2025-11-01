import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1',
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


