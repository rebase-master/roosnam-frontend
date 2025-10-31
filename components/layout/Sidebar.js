import Link from 'next/link';
import { useRouter } from 'next/router';
import { profile } from '../../lib/mockData';

const navigation = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Skills', href: '/skills', icon: '⚡' },
  { name: 'Experience', href: '/experience', icon: '💼' },
  { name: 'Blog', href: '/blog', icon: '📝' },
  { name: 'Projects', href: '/projects', icon: '🚀' },
  { name: 'Client Testimonials', href: '/testimonials', icon: '💬' },
];

const socialLinks = [
  { name: 'GitHub', href: profile.social.github, icon: '🐙' },
  { name: 'LinkedIn', href: profile.social.linkedin, icon: '💼' },
  { name: 'Twitter', href: profile.social.twitter, icon: '🐦' },
];

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  
  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };
  
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
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {profile.name}
              </h2>
              <p className="text-sm text-gray-500">Developer Portfolio</p>
            </div>
          </Link>
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
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-primary-100 hover:text-primary-600 transition-colors text-xl"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            © 2024 {profile.name}
          </p>
        </div>
      </aside>
    </>
  );
}

