import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card, { CardBody } from '../ui/Card';
import Badge from '../ui/Badge';
import { fetchSkills } from '../../lib/api';

// Simple skill categorization based on common patterns
const categorizeSkill = (skillName) => {
  const name = skillName.toLowerCase();
  if (['ruby', 'python', 'javascript', 'typescript', 'java', 'go', 'rust', 'php', 'sql'].some(lang => name.includes(lang))) {
    return { category: 'Languages', icon: '💻' };
  }
  if (['rails', 'react', 'django', 'next', 'node', 'express', 'vue', 'angular', 'spring'].some(fw => name.includes(fw))) {
    return { category: 'Frameworks', icon: '⚛️' };
  }
  if (['postgresql', 'mysql', 'redis', 'sqlite', 'mongodb', 'database'].some(db => name.includes(db))) {
    return { category: 'Databases', icon: '🗄️' };
  }
  if (['aws', 'docker', 'kubernetes', 'ci/cd', 'github actions', 'devops', 'cloud'].some(dev => name.includes(dev))) {
    return { category: 'Cloud & DevOps', icon: '☁️' };
  }
  if (['tailwind', 'css', 'figma', 'storybook', 'ui', 'ux', 'design'].some(design => name.includes(design))) {
    return { category: 'Design & UI', icon: '🎨' };
  }
  return { category: 'Tools & Others', icon: '🛠️' };
};

export default function SkillsPreview() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await fetchSkills()
        setSkills(data)
      } catch (err) {
        console.error('Failed to fetch skills:', err)
      } finally {
        setLoading(false)
      }
    }
    loadSkills()
  }, [])

  // Group skills by category
  const skillCategories = skills.reduce((acc, skill) => {
    const { category, icon } = categorizeSkill(skill.name)
    if (!acc[category]) {
      acc[category] = { name: category, icon, skills: [] }
    }
    acc[category].skills.push(skill.name)
    return acc
  }, {})

  const categories = Object.values(skillCategories).slice(0, 6) // Show max 6 categories

  if (loading) {
    return (
      <section className="py-16">
        <div className="space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (categories.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <Link
            href="/skills"
            className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
          >
            View All
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <Card key={idx} className="group cursor-pointer">
              <CardBody className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 4).map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant={skillIdx === 0 ? 'primary' : 'default'}
                      size="sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {category.skills.length > 4 && (
                    <Badge variant="default" size="sm">
                      +{category.skills.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        {/* Mobile View All Link */}
        <Link
          href="/skills"
          className="sm:hidden flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium pt-4"
        >
          View All Skills
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

