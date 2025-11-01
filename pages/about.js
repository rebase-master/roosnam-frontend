import { useProfile } from '../contexts/ProfileContext';
import InfoItem from '../components/ui/InfoItem';
import StatusBadge from '../components/ui/StatusBadge';
import Badge from '../components/ui/Badge';
import Link from 'next/link';

export default function About() {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/2"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <p className="text-xl text-gray-600">
          Get to know more about my background, skills, and experience.
        </p>
      </div>

      {/* Profile Summary Card */}
      <div className="card p-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white text-5xl font-bold">
            {(profile.display_name || profile.full_name || 'User').split(' ').map(n => n[0]).join('')}
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {profile.display_name || profile.full_name}
              </h2>
              <p className="text-xl text-gray-600 mt-1">{profile.headline}</p>
            </div>

            {profile.tagline && (
              <p className="text-lg text-gray-500 italic">
                "{profile.tagline}"
              </p>
            )}

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4">
              {profile.availability_status && (
                <StatusBadge status={profile.availability_status} size="md" />
              )}
              {profile.location && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
                  <span>📍</span>
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.years_of_experience && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
                  <span>💼</span>
                  <span>{profile.years_of_experience}+ years experience</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="card p-8 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {profile.bio}
          </p>
        </div>
      </div>

      {/* Current Role */}
      {(profile.current_role || profile.current_company) && (
        <div className="card p-8 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Current Position</h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
              💼
            </div>
            <div>
              {profile.current_role && (
                <h4 className="text-xl font-semibold text-gray-900">
                  {profile.current_role}
                </h4>
              )}
              {profile.current_company && (
                <p className="text-lg text-gray-600 mt-1">
                  at {profile.current_company}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Additional Info Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info Card */}
        <div className="card p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
          <div className="space-y-3">
            {profile.portfolio_settings?.show_email && profile.email && (
              <InfoItem
                icon="📧"
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
            )}
            {profile.portfolio_settings?.show_phone && profile.phone && (
              <InfoItem
                icon="📱"
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
              />
            )}
            {profile.location && (
              <InfoItem
                icon="📍"
                label="Location"
                value={profile.location}
              />
            )}
            {profile.timezone && (
              <InfoItem
                icon="🌍"
                label="Timezone"
                value={profile.timezone}
              />
            )}
          </div>
        </div>

        {/* Social Links Card */}
        {profile.social_links && Object.keys(profile.social_links).length > 0 && (
          <div className="card p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Connect With Me</h3>
            <div className="space-y-3">
              {profile.social_links.github && (
                <InfoItem
                  icon="🐙"
                  label="GitHub"
                  value="View Profile"
                  href={profile.social_links.github}
                />
              )}
              {profile.social_links.linkedin && (
                <InfoItem
                  icon="💼"
                  label="LinkedIn"
                  value="Connect"
                  href={profile.social_links.linkedin}
                />
              )}
              {profile.social_links.twitter && (
                <InfoItem
                  icon="🐦"
                  label="Twitter"
                  value="Follow"
                  href={profile.social_links.twitter}
                />
              )}
              {profile.social_links.website && (
                <InfoItem
                  icon="🌐"
                  label="Website"
                  value="Visit"
                  href={profile.social_links.website}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Skills Section - Link to dedicated page */}
      <div className="card p-8 space-y-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
          <Link 
            href="/skills"
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
          >
            View All Skills
            <span>→</span>
          </Link>
        </div>
        <p className="text-gray-600">
          Explore my technical expertise across various domains including languages, frameworks, tools, and more.
        </p>
      </div>

      {/* Experience Section - Link to dedicated page */}
      <div className="card p-8 space-y-4 bg-gradient-to-br from-accent-50 to-purple-50">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
          <Link 
            href="/experience"
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
          >
            View Full History
            <span>→</span>
          </Link>
        </div>
        <p className="text-gray-600">
          Discover my professional journey, roles, and the impact I've made across different organizations.
        </p>
      </div>

      {/* CTA */}
      <div className="card p-8 text-center space-y-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white">
        <h3 className="text-2xl font-bold">Let's Work Together</h3>
        <p className="text-lg opacity-90">
          Interested in collaborating? Get in touch to discuss your project.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

