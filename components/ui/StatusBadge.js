export default function StatusBadge({ status, size = 'md', showIcon = true }) {
  // Define status configurations
  const statusConfig = {
    available: {
      label: 'Available for Work',
      colors: 'bg-green-100 text-green-700 border-green-200',
      dotColor: 'bg-green-500',
      icon: '✓',
    },
    open_to_opportunities: {
      label: 'Open to Opportunities',
      colors: 'bg-blue-100 text-blue-700 border-blue-200',
      dotColor: 'bg-blue-500',
      icon: '○',
    },
    not_available: {
      label: 'Not Available',
      colors: 'bg-gray-100 text-gray-600 border-gray-200',
      dotColor: 'bg-gray-400',
      icon: '—',
    },
  };

  // Size variants
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const dotSizes = {
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5',
  };

  const config = statusConfig[status] || statusConfig.not_available;

  return (
    <div
      className={`
        inline-flex items-center gap-2 rounded-full border font-medium
        ${config.colors}
        ${sizeClasses[size]}
      `}
    >
      {showIcon && (
        <span className="relative flex">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dotColor} opacity-40`}></span>
          <span className={`relative inline-flex rounded-full ${dotSizes[size]} ${config.dotColor}`}></span>
        </span>
      )}
      <span>{config.label}</span>
    </div>
  );
}

