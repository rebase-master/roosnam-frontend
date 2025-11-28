import { useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import InfoItem from '../components/ui/InfoItem';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';

export default function Contact() {
  const { profile, loading } = useProfile();
  const [showRate, setShowRate] = useState(false);

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/2"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    );
  }

  const availabilityMessages = {
    available: "I'm currently available for new projects and collaborations. Let's discuss how I can help bring your ideas to life!",
    open_to_opportunities: "I'm open to exploring new opportunities. If you have an interesting project or position, I'd love to hear about it.",
    not_available: "I'm currently focused on existing commitments and not taking on new projects at this time. However, feel free to reach out for future opportunities.",
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Let's discuss your project or collaboration opportunity.
        </p>
      </div>

      {/* Availability Status */}
      {profile.availability_status && (
        <div className="card p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <StatusBadge status={profile.availability_status} size="lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Current Availability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {availabilityMessages[profile.availability_status]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Information Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Details */}
        <div className="card p-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
          
          <div className="space-y-4">
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

        {/* Hourly Rate & Social Links */}
        <div className="space-y-6">
          {/* Hourly Rate */}
          {profile.hourly_rate && (
            <div className="card p-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Rates</h3>
              
              {!showRate ? (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Interested in my rates? Click below to view pricing information.
                  </p>
                  <button
                    onClick={() => setShowRate(true)}
                    className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                  >
                    View Rates
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-6 bg-primary-50 rounded-lg border-2 border-primary-200">
                    <div className="text-sm text-primary-600 font-medium mb-1">
                      Hourly Rate
                    </div>
                    <div className="text-3xl font-bold text-primary-700">
                      {profile.hourly_rate}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Rates may vary based on project scope, duration, and requirements. Let's discuss your specific needs.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Social Links */}
          {profile.social_links && Object.keys(profile.social_links).length > 0 && (
            <div className="card p-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Connect</h3>
              
              <div className="space-y-3">
                {profile.social_links.linkedin && (
                  <InfoItem
                    icon="💼"
                    label="LinkedIn"
                    value="Connect on LinkedIn"
                    href={profile.social_links.linkedin}
                  />
                )}
                
                {profile.social_links.github && (
                  <InfoItem
                    icon="🐙"
                    label="GitHub"
                    value="View my code"
                    href={profile.social_links.github}
                  />
                )}
                
                {profile.social_links.twitter && (
                  <InfoItem
                    icon="🐦"
                    label="Twitter"
                    value="Follow me"
                    href={profile.social_links.twitter}
                  />
                )}
                
                {profile.social_links.website && (
                  <InfoItem
                    icon="🌐"
                    label="Website"
                    value="Visit my site"
                    href={profile.social_links.website}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Form Placeholder */}
      <div className="card p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-4xl">
            ✉️
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Contact Form
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A contact form will be available here soon. In the meantime, feel free to reach out via email or any of the social platforms listed above.
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6">
        <a
          href="/about"
          className="card p-6 hover:shadow-soft-lg transition-shadow group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
            👤
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            About Me
          </h4>
          <p className="text-gray-600 text-sm">
            Learn more about my background and experience
          </p>
        </a>

        <a
          href="/projects"
          className="card p-6 hover:shadow-soft-lg transition-shadow group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
            🚀
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            View Projects
          </h4>
          <p className="text-gray-600 text-sm">
            Explore my portfolio of work and case studies
          </p>
        </a>

        <a
          href="/blog"
          className="card p-6 hover:shadow-soft-lg transition-shadow group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
            📝
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Read Blog
          </h4>
          <p className="text-gray-600 text-sm">
            Check out my thoughts and technical articles
          </p>
        </a>
      </div>
    </div>
  );
}

