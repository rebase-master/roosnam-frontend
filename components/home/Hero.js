import Button from '../ui/Button';
import { profile } from '../../lib/mockData';

export default function Hero() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 font-medium">
            {profile.title}
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            {profile.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" href="/projects">
              View My Work
            </Button>
            <Button variant="secondary" href="/contact">
              Get in Touch
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-primary-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">30+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Visual Element */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-accent-50 to-purple-100 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-100 via-primary-50 to-indigo-100 rounded-3xl transform -rotate-3"></div>
            
            {/* Profile Image Placeholder */}
            <div className="relative w-full h-full bg-white rounded-3xl shadow-soft-lg overflow-hidden flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <span className="text-white text-8xl font-bold">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-soft-lg p-4 animate-bounce">
              <div className="text-3xl">⚛️</div>
            </div>
            <div className="absolute top-1/4 -left-4 bg-white rounded-xl shadow-soft-lg p-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl">💻</div>
            </div>
            <div className="absolute -bottom-4 left-1/4 bg-white rounded-xl shadow-soft-lg p-4 animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="text-3xl">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

