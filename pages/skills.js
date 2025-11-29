import { useState, useEffect } from 'react'
import { fetchSkills } from '../lib/api'
import Card, { CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { mockSkills } from '../lib/mockData'

// Check if we should use mock data (default: true)
const useMockData = process.env.NEXT_PUBLIC_SHOW_MOCK_DATA !== 'false'

// Skill categorization function (same as SkillsPreview)
const categorizeSkill = (skillName) => {
  const name = skillName.toLowerCase();
  if (['ruby', 'python', 'javascript', 'typescript', 'java', 'go', 'golang', 'rust', 'php', 'sql'].some(lang => name.includes(lang))) {
    return { category: 'Languages', icon: '💻' };
  }
  if (['rails', 'react', 'django', 'next', 'node', 'express', 'vue', 'angular', 'spring'].some(fw => name.includes(fw))) {
    return { category: 'Frameworks', icon: '⚛️' };
  }
  if (['postgresql', 'mysql', 'redis', 'sqlite', 'mongodb', 'database'].some(db => name.includes(db))) {
    return { category: 'Databases', icon: '🗄️' };
  }
  if (['aws', 'docker', 'kubernetes', 'ci/cd', 'github actions', 'devops', 'cloud', 'azure', 'terraform'].some(dev => name.includes(dev))) {
    return { category: 'Cloud & DevOps', icon: '☁️' };
  }
  if (['tailwind', 'css', 'figma', 'storybook', 'ui', 'ux', 'design'].some(design => name.includes(design))) {
    return { category: 'Design & UI', icon: '🎨' };
  }
  if (['pytorch', 'tensorflow', 'mlops', 'computer vision', 'nlp', 'langchain', 'machine learning', 'ai'].some(ml => name.includes(ml))) {
    return { category: 'ML/AI', icon: '🤖' };
  }
  return { category: 'Tools & Others', icon: '🛠️' };
};

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadSkills() {
      try {
        if (useMockData) {
          setSkills(mockSkills)
          setError(null)
        } else {
          const data = await fetchSkills()
          setSkills(data)
          setError(null)
        }
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

  // Group skills by category
  const skillCategories = skills.reduce((acc, skill) => {
    const { category, icon } = categorizeSkill(skill.name)
    if (!acc[category]) {
      acc[category] = { name: category, icon, skills: [] }
    }
    acc[category].skills.push(skill)
    return acc
  }, {})

  if (loading) {
    return (
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600">A comprehensive overview of my technical skills and proficiency levels.</p>
        </div>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((j) => (
                  <div key={j} className="animate-pulse h-32 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
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

  // Display skills grouped by category
  // Custom order: Languages, Frameworks, Databases, Design & UI, then others
  const categoryOrder = ['Languages', 'Frameworks', 'Databases', 'Design & UI', 'Cloud & DevOps', 'ML/AI', 'Tools & Others']
  const categories = Object.values(skillCategories).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.name)
    const indexB = categoryOrder.indexOf(b.name)
    // If category is in the order list, use its index; otherwise put it at the end
    const orderA = indexA === -1 ? 999 : indexA
    const orderB = indexB === -1 ? 999 : indexB
    return orderA - orderB
  })

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
        <p className="text-xl text-gray-600">
          A comprehensive overview of my technical skills and proficiency levels.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="space-y-6">
          {/* Category Header */}
          <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
            <div className="text-3xl">{category.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
            <span className="text-sm text-gray-500">({category.skills.length})</span>
          </div>

          {/* Skills Grid for this Category */}
          <div className="grid md:grid-cols-2 gap-6">
            {category.skills.map((skill) => (
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
      ))}
    </div>
  )
}
