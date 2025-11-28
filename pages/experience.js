import { useState, useEffect } from 'react'
import { fetchWorkExperiences } from '../lib/api'
import Card, { CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export default function Experience() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadExperiences() {
      try {
        const data = await fetchWorkExperiences()
        setExperiences(data)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch work experiences:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadExperiences()
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600">My career journey and professional accomplishments.</p>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-gray-200 rounded-lg"></div>
          <div className="h-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600">My career journey and professional accomplishments.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error loading experiences: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
        <p className="text-xl text-gray-600">
          My career journey and professional accomplishments.
        </p>
      </div>
      
      {experiences.length === 0 ? (
        <div className="bg-white rounded-lg shadow-soft p-8 text-center">
          <div className="text-6xl mb-4">💼</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Experience Yet</h2>
          <p className="text-gray-600">
            Work experience will appear here once added.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardBody className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.job_title}</h3>
                    <p className="text-xl text-primary-600 font-medium mt-1">{exp.employer_name}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.city && exp.state && (
                        <Badge variant="default" size="sm">
                          📍 {exp.city}, {exp.state}
                        </Badge>
                      )}
                      {exp.country && (
                        <Badge variant="default" size="sm">
                          {exp.country}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">
                      {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

