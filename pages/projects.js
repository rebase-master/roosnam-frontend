import { useState, useEffect } from 'react'
import { fetchClientProjects } from '../lib/api'
import Card, { CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { mockClientProjects } from '../lib/mockData'

// Check if we should use mock data (default: true)
const useMockData = process.env.NEXT_PUBLIC_SHOW_MOCK_DATA !== 'false'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        if (useMockData) {
          setProjects(mockClientProjects)
          setError(null)
        } else {
          const data = await fetchClientProjects()
          setProjects(data)
          setError(null)
        }
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

  // Use standard grid without bento sizing to avoid white space issues
  const getBentoClass = (index) => {
    // All cards are the same size for consistent layout
    return 'lg:col-span-1';
  };

  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Work & Freelance Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A showcase of projects I've built for clients, highlighting my role and the technologies used.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="card card-glass p-8 text-center animate-scale-in">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No Projects Yet</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Client projects will appear here once added.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className={`
                group flex flex-col overflow-hidden
                ${getBentoClass(idx)}
                card-glass
                animate-scale-in
                hover:shadow-glow
              `}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-200 via-accent-100 to-purple-200 dark:from-primary-900 dark:via-accent-900 dark:to-purple-900 overflow-hidden rounded-t-lg group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <div className="text-6xl opacity-50">
                    {idx % 3 === 0 ? '🛒' : idx % 3 === 1 ? '🏥' : '📊'}
                  </div>
                </div>
                {project.project_url && (
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-glow-sm border border-gray-200/50 dark:border-gray-700/50 opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>

              <CardBody className="flex-1 flex flex-col space-y-4">
                {project.role && (
                  <Badge variant="primary" size="sm" className="self-start animate-pulse-slow">
                    {project.role}
                  </Badge>
                )}

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.name}
                </h3>
                
                {project.client_name && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client: {project.client_name}</p>
                )}

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                  {project.description && project.description.length > 150
                    ? project.description.substring(0, 150) + '...'
                    : project.description}
                </p>
                
                {/* Skills from API */}
                {project.skills && project.skills.length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
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
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
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

                <div className="flex items-center justify-between pt-2 mt-auto border-t border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
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

