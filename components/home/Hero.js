import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { useProfile } from '../../contexts/ProfileContext';
import { fetchClientProjects } from '../../lib/api';
import { mockClientProjects } from '../../lib/mockData';

// Check if we should use mock data (default: true)
const useMockData = process.env.NEXT_PUBLIC_SHOW_MOCK_DATA !== 'false';

export default function Hero() {
  const { profile, loading } = useProfile();
  const [hasProjects, setHasProjects] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    async function checkProjects() {
      try {
        if (useMockData) {
          setHasProjects(mockClientProjects.length > 0);
        } else {
          const data = await fetchClientProjects();
          setHasProjects(data.length > 0);
        }
      } catch (err) {
        console.error('Failed to check projects:', err);
        setHasProjects(false);
      } finally {
        setProjectsLoading(false);
      }
    }
    checkProjects();
  }, []);
  
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

  // Handle case when profile failed to load
  if (!profile) {
    return (
      <section className="relative py-12 lg:py-20">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800">Unable to load profile data. Please check if the API is running.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 dark:from-primary-400 dark:via-purple-400 dark:to-accent-400 bg-clip-text text-transparent animate-gradient bg-200">
              {profile.display_name || profile.full_name}
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            {profile.headline}
          </p>

          {profile.tagline && (
            <p className="text-lg text-gray-500 dark:text-gray-400 italic">
              {profile.tagline}
            </p>
          )}

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {profile.bio ? profile.bio.substring(0, 200) + (profile.bio.length > 200 ? '...' : '') : ''}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {!projectsLoading && hasProjects && (
              <Button variant="primary" href="/projects">
                View My Work
              </Button>
            )}
            <Button variant="secondary" href="/contact">
              Get in Touch
            </Button>
          </div>
        </div>
        
        {/* Right Content - Visual Element */}
        <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full aspect-square">
            {/* Decorative elements with glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-accent-100 to-purple-200 dark:from-primary-900 dark:via-accent-900 dark:to-purple-900 rounded-3xl transform rotate-6 shadow-glow animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-200 via-primary-100 to-indigo-200 dark:from-accent-900 dark:via-primary-900 dark:to-indigo-900 rounded-3xl transform -rotate-3 shadow-glow animate-float" style={{ animationDelay: '1s' }}></div>

            {/* Profile Image with glassmorphism */}
            <div className="relative w-full h-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-soft-lg dark:shadow-dark-soft-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden flex items-center justify-center">
              {(() => {
                // Only use mock photo fallback when mock data is enabled
                const profilePhotoPath = profile?.profile_photo_url || (useMockData ? '/images/carter_benett_sse.png' : null);
                const displayName = profile?.display_name || profile?.full_name || 'User';
                const initials = displayName.split(' ').map(n => n[0]).join('') || 'U';
                const showPhoto = !imageError && profilePhotoPath;
                
                return showPhoto ? (
                  <div className="w-3/4 h-3/4 rounded-2xl overflow-hidden relative">
                    <Image
                      src={profilePhotoPath}
                      alt={displayName}
                      fill
                      className="object-cover"
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  <div className="w-3/4 h-3/4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-8xl font-bold">
                      {initials}
                    </span>
                  </div>
                );
              })()}
            </div>
            
            {/* Floating badges with glassmorphism */}
            <div className="absolute -top-4 -right-4 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-glow-sm dark:shadow-dark-soft-lg border border-gray-200/50 dark:border-gray-700/50 p-4 animate-float hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl">⚛️</div>
            </div>
            <div className="absolute top-1/4 -left-4 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-glow-sm dark:shadow-dark-soft-lg border border-gray-200/50 dark:border-gray-700/50 p-4 animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '2s' }}>
              <div className="text-3xl">💻</div>
            </div>
            <div className="absolute -bottom-4 left-1/4 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-glow-sm dark:shadow-dark-soft-lg border border-gray-200/50 dark:border-gray-700/50 p-4 animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '4s' }}>
              <div className="text-3xl">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

