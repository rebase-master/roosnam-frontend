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
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-accent-50 to-purple-100 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-100 via-primary-50 to-indigo-100 rounded-3xl transform -rotate-3"></div>
            
            {/* Profile Image */}
            <div className="relative w-full h-full bg-white rounded-3xl shadow-soft-lg overflow-hidden flex items-center justify-center">
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

