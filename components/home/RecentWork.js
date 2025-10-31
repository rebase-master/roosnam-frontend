import Link from 'next/link';
import Card, { CardBody } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { projects } from '../../lib/mockData';

const techVariants = ['primary', 'accent', 'purple', 'indigo', 'default'];

export default function RecentWork() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  
  return (
    <section className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A selection of my recent work and collaborations
            </p>
          </div>
          <Link
            href="/projects"
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
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <Card key={project.id} className="group flex flex-col">
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 via-accent-50 to-purple-100 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {idx === 0 ? '🛒' : idx === 1 ? '🏥' : '📊'}
                  </div>
                </div>
                {project.projectUrl && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>
              
              <CardBody className="flex-1 flex flex-col space-y-4">
                {/* Role Badge */}
                <Badge variant="primary" size="sm" className="self-start">
                  {project.role}
                </Badge>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {project.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {project.description.length > 150
                    ? project.description.substring(0, 150) + '...'
                    : project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                  {project.techStack.slice(0, 3).map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant={techVariants[techIdx % techVariants.length]}
                      size="sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="default" size="sm">
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center pt-8">
          <p className="text-gray-600 mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="/projects">
              View All Projects
            </Button>
            <Button variant="secondary" href="/contact">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

