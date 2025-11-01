import Button from '../ui/Button';
import { useProfile } from '../../contexts/ProfileContext';

export default function Hero() {
  const { profile, loading } = useProfile();
  
  if (loading) {
    return (
      <section className="relative py-12 lg:py-20">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
          <div className="h-24 bg-gray-200 rounded w-full"></div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              {profile.display_name || profile.full_name}
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 font-medium">
            {profile.headline}
          </p>
          
          {profile.tagline && (
            <p className="text-lg text-gray-500 italic">
              {profile.tagline}
            </p>
          )}
          
          <p className="text-lg text-gray-700 leading-relaxed">
            {profile.bio ? profile.bio.substring(0, 200) + (profile.bio.length > 200 ? '...' : '') : ''}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" href="/projects">
              View My Work
            </Button>
            <Button variant="secondary" href="/contact">
              Get in Touch
            </Button>
            {profile.resume_url && (
              <Button variant="ghost" href={profile.resume_url} target="_blank">
                Download Resume
              </Button>
            )}
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
                  {(profile.display_name || profile.full_name || 'User').split(' ').map(n => n[0]).join('')}
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

