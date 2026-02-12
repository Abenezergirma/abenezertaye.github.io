'use client';

import Image from 'next/image';
import { Mail, Linkedin, Github, GraduationCap, MapPin } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="h-full ">
      {/* Container with left margin */}
      <div className="ml-6 py-12">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300">
            <Image
              src="/images/image.jpg"
              alt="Abenezer Taye"
              width={160}
              height={160}
              className="w-full h-full object-contain"
              style={{ objectPosition: 'center 20%' }}
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Abenezer Taye</h1>
          <div className="space-y-1 text-gray-800">
            <p className="text-base">Postdoctoral Scholar</p>
            <p className="text-sm">Institute for Software Integrated Systems</p>
            <p className="text-sm">Vanderbilt University</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-6"></div>

        {/* Contact Links */}
        <div className="mb-6">
          <div className="space-y-4">
            <a
              href="mailto:abenezertaye@gvu.edu"
              className="flex items-center gap-3 text-green-700 hover:text-green-900 hover:underline"
            >
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abenezer-taye/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-green-700 hover:text-green-900 hover:underline"
            >
              <Linkedin className="h-4 w-4 text-gray-400" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Abenezergirma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-green-700 hover:text-green-900 hover:underline"
            >
              <Github className="h-4 w-4 text-gray-400" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-green-700 hover:text-green-900 hover:underline"
            >
              <GraduationCap className="h-4 w-4 text-gray-400" />
              <span className="text-sm">Google Scholar</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-6"></div>

        {/* Location */}
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-sm">Nashville, TN</span>
        </div>
      </div>
    </div>
  );
}