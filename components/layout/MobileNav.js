import Image from 'next/image';
import { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';

// Check if we should use mock data (default: true)
const useMockData = process.env.NEXT_PUBLIC_SHOW_MOCK_DATA !== 'false';

export default function MobileNav({ isOpen, onToggle }) {
  const { profile, loading } = useProfile();
  const [imageError, setImageError] = useState(false);
  
  const displayName = profile?.display_name || profile?.full_name || 'User';
  const initials = displayName.split(' ').map(n => n[0]).join('') || 'U';
  // Only use mock photo fallback when mock data is enabled
  const profilePhotoPath = profile?.profile_photo_url || (useMockData ? '/images/carter_benett_sse.png' : null);
  const showPhoto = !imageError && profilePhotoPath;
  
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500">
          {loading ? (
            <span>...</span>
          ) : showPhoto ? (
            <Image
              src={profilePhotoPath}
              alt={displayName}
              width={40}
              height={40}
              className="object-cover w-full h-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <span className="font-semibold text-gray-900">Portfolio</span>
      </div>
      
      <button
        onClick={onToggle}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  );
}

