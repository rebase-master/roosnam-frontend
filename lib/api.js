import axios from 'axios'

// API base URL - must be set via NEXT_PUBLIC_API_URL environment variable
// Example values:
// Development (local): http://localhost:3000/api/v1
// Development (Docker): http://backend:80/api/v1
// Production: https://api.yourdomain.com/api/v1
// 
// If NEXT_PUBLIC_API_URL contains 'backend' (Docker service name), use localhost for browser requests
// since browsers can't resolve Docker service names
const getApiBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL
  if (!envUrl) {
    return 'http://localhost:3000/api/v1'
  }
  
  // If running in browser and URL contains Docker service name, use localhost instead
  // Browsers can't resolve Docker service names, so we need to use localhost
  if (typeof window !== 'undefined' && envUrl.includes('backend')) {
    // Extract port if present, otherwise use default 3000
    const portMatch = envUrl.match(/:(\d+)/)
    const port = portMatch ? portMatch[1] : '3000'
    return `http://localhost:${port}/api/v1`
  }
  
  return envUrl
}

const API_BASE_URL = getApiBaseUrl()

// Log the API URL in development for debugging (only in browser)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('API Base URL:', API_BASE_URL)
}

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

// Work Experiences API
export const fetchWorkExperiences = async () => {
  const response = await api.get('/work_experiences')
  return response.data
}

// Education API
export const fetchEducation = async () => {
  const response = await api.get('/education')
  return response.data
}

// Certifications API
export const fetchCertifications = async () => {
  const response = await api.get('/certifications')
  return response.data
}

// Client Projects API
export const fetchClientProjects = async () => {
  const response = await api.get('/client_projects')
  return response.data
}

// Client Reviews API
export const fetchClientReviews = async () => {
  const response = await api.get('/client_reviews')
  return response.data
}

