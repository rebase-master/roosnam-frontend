import { useState, useEffect } from 'react'
import { fetchClientProjects } from '../lib/api'
import Card, { CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchClientProjects()
        setProjects(data)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch projects:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  const techVariants = ['primary', 'accent', 'purple', 'indigo', 'default']

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Work & Freelance Projects</h1>
          <p className="text-xl text-gray-600">A showcase of projects I've built for clients.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse h-64 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Work & Freelance Projects</h1>
          <p className="text-xl text-gray-600">A showcase of projects I've built for clients.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error loading projects: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Work & Freelance Projects</h1>
        <p className="text-xl text-gray-600">
          A showcase of projects I've built for clients, highlighting my role and the technologies used.
        </p>
      </div>
      
      {projects.length === 0 ? (
        <div className="bg-white rounded-lg shadow-soft p-8 text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Projects Yet</h2>
          <p className="text-gray-600">
            Client projects will appear here once added.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={project.id} className="group flex flex-col">
              <div className="relative h-48 bg-gradient-to-br from-primary-100 via-accent-50 to-purple-100 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {idx % 3 === 0 ? '🛒' : idx % 3 === 1 ? '🏥' : '📊'}
                  </div>
                </div>
                {project.project_url && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>
              
              <CardBody className="flex-1 flex flex-col space-y-4">
                {project.role && (
                  <Badge variant="primary" size="sm" className="self-start">
                    {project.role}
                  </Badge>
                )}
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {project.name}
                </h3>
                
                {project.client_name && (
                  <p className="text-sm text-gray-500">Client: {project.client_name}</p>
                )}
                
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {project.description && project.description.length > 150
                    ? project.description.substring(0, 150) + '...'
                    : project.description}
                </p>
                
                {/* Skills from API */}
                {project.skills && project.skills.length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                    {project.skills.slice(0, 5).map((skill, skillIdx) => (
                      <Badge
                        key={skill.id}
                        variant={techVariants[skillIdx % techVariants.length]}
                        size="sm"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                    {project.skills.length > 5 && (
                      <Badge variant="default" size="sm">
                        +{project.skills.length - 5} more
                      </Badge>
                    )}
                  </div>
                ) : project.tech_stack ? (
                  // Fallback to tech_stack string if skills array not available
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                    {project.tech_stack.split(',').slice(0, 3).map((tech, techIdx) => (
                      <Badge
                        key={techIdx}
                        variant={techVariants[techIdx % techVariants.length]}
                        size="sm"
                      >
                        {tech.trim()}
                      </Badge>
                    ))}
                    {project.tech_stack.split(',').length > 3 && (
                      <Badge variant="default" size="sm">
                        +{project.tech_stack.split(',').length - 3}
                      </Badge>
                    )}
                  </div>
                ) : null}
                
                {/* Client Reviews Count */}
                {project.client_reviews && project.client_reviews.length > 0 && (
                  <div className="pt-2 text-xs text-gray-500">
                    💬 {project.client_reviews.length} review{project.client_reviews.length !== 1 ? 's' : ''}
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    {formatDate(project.start_date)} - {formatDate(project.end_date)}
                  </span>
                  {project.project_url && (
                    <Button variant="ghost" size="sm" href={project.project_url} target="_blank">
                      View Project
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

