export default function InfoItem({ icon, label, value, href, variant = 'default' }) {
  // If no value provided, don't render
  if (!value) return null;

  const Content = () => (
    <div className="flex items-start gap-3">
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-xl">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {label && (
          <div className="text-sm font-medium text-gray-500 mb-0.5">
            {label}
          </div>
        )}
        <div className="text-base text-gray-900 break-words">
          {value}
        </div>
      </div>
    </div>
  );

  // If href is provided, make it a link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
      >
        <div className="flex items-start gap-3">
          {icon && (
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 group-hover:bg-primary-100 group-hover:text-primary-600 rounded-lg text-xl transition-colors">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            {label && (
              <div className="text-sm font-medium text-gray-500 mb-0.5">
                {label}
              </div>
            )}
            <div className="text-base text-gray-900 group-hover:text-primary-600 break-words transition-colors">
              {value}
            </div>
          </div>
          <div className="flex-shrink-0 text-gray-400 group-hover:text-primary-600 transition-colors">
            →
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="p-4">
      <Content />
    </div>
  );
}

