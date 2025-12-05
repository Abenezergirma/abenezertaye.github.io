import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Abenezer Taye</h3>
            <p className="text-gray-400 text-sm">
              Post-Doctoral Research Scholar specializing in Advanced Air Mobility and Autonomous Systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white text-sm">
                Home
              </Link>
              <Link href="/research" className="block text-gray-400 hover:text-white text-sm">
                Research
              </Link>
              <Link href="/publications" className="block text-gray-400 hover:text-white text-sm">
                Publications
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white text-sm">
                About
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{siteConfig.contact.office}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.links.email}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white text-sm"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white text-sm"
              >
                GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Abenezer Taye. All rights reserved.</p>
          <p className="mt-2">Vanderbilt University • Institute for Software Integrated Systems</p>
        </div>
      </div>
    </footer>
  );
}