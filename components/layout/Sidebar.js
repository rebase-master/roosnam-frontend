import Link from 'next/link';
import { useRouter } from 'next/router';
import { useProfile } from '../../contexts/ProfileContext';
import StatusBadge from '../ui/StatusBadge';

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
  
  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };
  
  // Show loading state or fallback if profile is not loaded
  const displayName = profile?.display_name || profile?.full_name || 'User';
  const initials = displayName.split(' ').map(n => n[0]).join('') || 'U';
  
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
          fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              {loading ? '...' : initials}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors truncate">
                {loading ? 'Loading...' : displayName}
              </h2>
              <p className="text-sm text-gray-500">Developer Portfolio</p>
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
            <div className="flex items-center gap-2 text-sm text-gray-600 px-2">
              <span className="text-base">📍</span>
              <span className="truncate">{profile.location}</span>
            </div>
          )}
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
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {profile?.social_links?.github && (
              <a
                href={profile.social_links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-primary-100 hover:text-primary-600 transition-colors text-xl"
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
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-primary-100 hover:text-primary-600 transition-colors text-xl"
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
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-primary-100 hover:text-primary-600 transition-colors text-xl"
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
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-primary-100 hover:text-primary-600 transition-colors text-xl"
                aria-label="Website"
              >
                🌐
              </a>
            )}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            © 2024 {profile?.full_name || profile?.display_name || 'Portfolio'}
          </p>
        </div>
      </aside>
    </>
  );
}

