'use client';

import Link from 'next/link';
import React from 'react';
import { FaMicrophoneAlt } from 'react-icons/fa'; // Replaced fingerprint icon to match site branding

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-3">
            <FaMicrophoneAlt className="text-indigo-600 w-6 h-6" />
            <span className="text-xl font-semibold text-indigo-700">
              {siteDetails.siteName}
            </span>
          </Link>
          <p className="text-sm text-gray-500">
            {footerDetails.subheading}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-indigo-700 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {footerDetails.quickLinks.map(link => (
              <li key={link.text}>
                <Link
                  href={link.url}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-indigo-700 mb-4">Contact Us</h4>
          {footerDetails.email && (
            <p className="text-sm text-gray-600">
              <a
                href={`mailto:${footerDetails.email}`}
                className="hover:text-indigo-600 transition-colors"
              >
                📧 {footerDetails.email}
              </a>
            </p>
          )}
          {footerDetails.telephone && (
            <p className="text-sm mt-2 text-gray-600">
              <a
                href={`tel:${footerDetails.telephone}`}
                className="hover:text-indigo-600 transition-colors"
              >
                📞 {footerDetails.telephone}
              </a>
            </p>
          )}

          {/* Social Icons */}
          {footerDetails.socials && (
            <div className="mt-4 flex items-center gap-4">
              {Object.entries(footerDetails.socials).map(([platform, url]) =>
  url ? (
    <Link
      key={platform}
      href={url}
      aria-label={platform}
      className="text-gray-500 hover:text-indigo-600 transition-colors text-lg"
    >
      {getPlatformIconByName(platform)}
    </Link>
  ) : null
)}

            </div>
          )}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-gray-100 text-center text-sm text-gray-500 py-4 px-6">
        <p>&copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
