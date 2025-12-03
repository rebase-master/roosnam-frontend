import React from 'react';

export default function ResumeDownload({ resumeUrl }) {
  if (!resumeUrl) {
    return (
      <div className="card p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Resume</h3>
        <p className="text-gray-600 text-sm">
          Resume will appear here once it has been uploaded in the admin dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Resume</h3>

      {/* Info / placeholder instead of inline preview (blocked by X-Frame-Options) */}
      <div className="border rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
        <div className="w-[300px] h-[400px] flex flex-col items-center justify-center text-gray-500 space-y-2 px-4 text-center">
          <span className="text-4xl">📄</span>
          <p className="text-sm">
            Resume will open in a separate tab.
          </p>
        </div>
      </div>

      {/* Download button */}
      <div>
        <a
          href={resumeUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <span className="mr-2">⬇️</span>
          Download Resume
        </a>
      </div>
    </div>
  );
}


