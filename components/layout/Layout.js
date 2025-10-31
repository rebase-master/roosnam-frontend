import { useState } from 'react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation Bar */}
      <MobileNav isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

