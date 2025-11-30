import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useProfile } from '../../contexts/ProfileContext';
import { useTheme } from '../../contexts/ThemeContext';
import StatusBadge from '../ui/StatusBadge';

// Check if we should use mock data (default: true)
const useMockData = process.env.NEXT_PUBLIC_SHOW_MOCK_DATA !== 'false';

const navigation = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'About', href: '/about', icon: '👤' },
  { name: 'Skills', href: '/skills', icon: '⚡' },
  { name: 'Experience', href: '/experience', icon: '💼' },
  { name: 'Blog', href: '/blog', icon: '📝' },
  { name: 'Projects', href: '/projects', icon: '🚀' },
  { name: 'Client Testimonials', href: '/testimonials', icon: '💬' },
  { name: 'Contact', href: '/contact', icon: '✉️' },
];

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  const { profile, loading } = useProfile();
  const { theme, toggleTheme } = useTheme();
  const [imageError, setImageError] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  
  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };
  
  // Show loading state or fallback if profile is not loaded
  const fullName = profile?.display_name || profile?.full_name || 'User';
  const initials = fullName.split(' ').map(n => n[0]).join('') || 'U';
  // Only use mock photo fallback when mock data is enabled
  const profilePhotoPath = profile?.profile_photo_url || (useMockData ? '/images/carter_benett_sse.png' : null);
  const showPhoto = !imageError && profilePhotoPath;
  
  // Format name for display: "Firstname S." if it fits, otherwise "Firstname..." with ellipsis
  const formatDisplayName = (name) => {
    if (!name) return 'User';
    
    const nameParts = name.trim().split(/\s+/);
    if (nameParts.length === 0) return 'User';
    
    const firstName = nameParts[0];
    const surname = nameParts.length > 1 ? nameParts[nameParts.length - 1] : null;
    
    // Try "Firstname S." format (max ~22 chars for sidebar width)
    if (surname && surname.length > 0) {
      const shortFormat = `${firstName} ${surname[0]}.`;
      if (shortFormat.length <= 22) {
        return shortFormat;
      }
    }
    
    // If short format doesn't fit, show firstname with ellipsis to indicate truncation
    // Reserve 3 chars for "..."
    const maxFirstNameLength = 19; // 22 - 3 for "..."
    if (firstName.length <= maxFirstNameLength) {
      return firstName + '...';
    }
    
    // If even firstname is too long, truncate it
    return firstName.substring(0, maxFirstNameLength) + '...';
  };
  
  const displayName = formatDisplayName(fullName);

  // Track active section on scroll
  useEffect(() => {
    setActiveSection(router.pathname);
  }, [router.pathname]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-800
          z-50
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:sticky lg:top-0
          flex flex-col
          backdrop-blur-sm
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow-sm hover:shadow-glow transition-shadow duration-300">
              {loading ? (
                <span>...</span>
              ) : showPhoto ? (
                <Image
                  src={profilePhotoPath}
                  alt={fullName}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h2
                className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate"
                title={fullName}
              >
                {loading ? 'Loading...' : displayName}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Developer Portfolio</p>
            </div>
          </Link>
          
          {/* Availability Status */}
          {profile?.availability_status && (
            <div className="flex justify-center">
              <StatusBadge status={profile.availability_status} size="sm" />
            </div>
          )}
          
          {/* Location */}
          {profile?.location && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 px-2">
              <span className="text-base">📍</span>
              <span className="truncate">{profile.location}</span>
            </div>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
            aria-label="Toggle theme"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`
                      nav-link
                      ${active ? 'nav-link-active' : ''}
                    `}
                    onClick={onClose}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Footer with social links */}
        <div className="p-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {profile?.social_links?.github && (
              <a
                href={profile.social_links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all transform hover:scale-110 text-xl"
                aria-label="GitHub"
              >
                🐙
              </a>
            )}
            {profile?.social_links?.linkedin && (
              <a
                href={profile.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all transform hover:scale-110 text-xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
            )}
            {profile?.social_links?.twitter && (
              <a
                href={profile.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all transform hover:scale-110 text-xl"
                aria-label="Twitter"
              >
                🐦
              </a>
            )}
            {profile?.social_links?.website && (
              <a
                href={profile.social_links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all transform hover:scale-110 text-xl"
                aria-label="Website"
              >
                🌐
              </a>
            )}
          </div>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            © 2024 {profile?.full_name || profile?.display_name || 'Portfolio'}
          </p>
        </div>
      </aside>
    </>
  );
}

