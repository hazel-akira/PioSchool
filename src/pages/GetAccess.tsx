// src/pages/GetAccess.tsx
import React from 'react'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const portals = [
  {
    name: 'Ministry of Education',
    url: 'https://moe.go.ke/',
  },
  {
    name: 'KUCCPS',
    url: 'https://students.kuccps.net/',
  },
  {
    name: 'KNEC Portal',
    url: 'https://www.knec.ac.ke/',
  },
  {
    name: 'NEMIS Portal',
    url: 'https://nemis.education.go.ke/',
  },
]

const GetAccess: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#f9fafb]">
    
    {/* Hero / Intro */}
    <main className="flex-grow py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#093056] mb-4">
          Get Access to Information & Resources
        </h1>
        <p className="text-gray-600">
          Quick links to essential portals for students, parents and staff.  
        </p>
      </div>

      {/* Portal Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {portals.map((portal) => (
          <a
            key={portal.name}
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col items-center justify-center text-center"
          >
            <ArrowTopRightOnSquareIcon className="w-8 h-8 text-[#093056] mb-4" />
            <h2 className="text-lg font-semibold text-[#093056]">
              {portal.name}
            </h2>
          </a>
        ))}
      </div>
    </main>

  
  </div>
)

export default GetAccess
