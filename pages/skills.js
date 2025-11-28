import { useState, useEffect } from 'react'
import { fetchSkills } from '../lib/api'
import Card, { CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await fetchSkills()
        setSkills(data)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch skills:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadSkills()
  }, [])

  const proficiencyColors = {
    beginner: 'default',
    intermediate: 'accent',
    advanced: 'primary',
    expert: 'purple',
  }

  const proficiencyWidth = {
    beginner: '25%',
    intermediate: '50%',
    advanced: '75%',
    expert: '100%',
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600">A detailed look at my technical expertise.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse h-48 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600">A detailed look at my technical expertise.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error loading skills: {error}</p>
        </div>
      </div>
    )
  }

  // Empty state when no skills exist
  if (skills.length === 0) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Skills Yet</h2>
          <p className="text-gray-600">
            Skills will appear here once added to the profile.
          </p>
        </div>
      </div>
    )
  }

  // Display skills from API with proficiency levels
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
        <p className="text-xl text-gray-600">
          A comprehensive overview of my technical skills and proficiency levels.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <Card key={skill.id}>
            <CardBody className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                {skill.proficiency_level && (
                  <Badge variant={proficiencyColors[skill.proficiency_level] || 'default'} size="sm">
                    {skill.proficiency_level.charAt(0).toUpperCase() + skill.proficiency_level.slice(1)}
                  </Badge>
                )}
              </div>
              
              {skill.proficiency_level && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: proficiencyWidth[skill.proficiency_level] || '50%' }}
                  ></div>
                </div>
              )}
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {skill.years_of_experience && (
                  <span>📅 {skill.years_of_experience} years</span>
                )}
                {skill.source_company && (
                  <span>🏢 {skill.source_company}</span>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
