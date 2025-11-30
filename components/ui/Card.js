export default function Card({ children, className = '', hover = true, ...props }) {
  const hoverClass = hover ? 'hover:shadow-soft-lg dark:hover:shadow-dark-soft-lg hover:scale-[1.02]' : '';

  return (
    <div
      className={`
        bg-white dark:bg-gray-900
        rounded-lg
        shadow-soft dark:shadow-dark-soft
        border border-transparent dark:border-gray-800
        transition-all duration-300
        ${hoverClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-t border-gray-100 dark:border-gray-800 ${className}`}>
      {children}
    </div>
  );
}

