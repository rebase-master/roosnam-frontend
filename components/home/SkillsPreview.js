import Link from 'next/link';
import Card, { CardBody } from '../ui/Card';
import Badge from '../ui/Badge';
import { skillCategories } from '../../lib/mockData';

export default function SkillsPreview() {
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
          {skillCategories.map((category) => (
            <Card key={category.id} className="group cursor-pointer">
              <CardBody className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 4).map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant={idx === 0 ? 'primary' : 'default'}
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

