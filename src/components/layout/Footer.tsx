import Link from 'next/link';
import { Linkedin, Github, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-secondary-300 mb-2">{siteConfig.contact.office}</p>
            <p className="text-secondary-300 mb-2">{siteConfig.contact.phone}</p>
            <p className="text-secondary-300">{siteConfig.links.email}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-secondary-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/research" className="block text-secondary-300 hover:text-white transition-colors">
                Research
              </Link>
              <Link href="/publications" className="block text-secondary-300 hover:text-white transition-colors">
                Publications
              </Link>
              <Link href="/contact" className="block text-secondary-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Abenezer Taye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}