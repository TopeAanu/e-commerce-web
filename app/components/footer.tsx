import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[1300px]">
        {/* Social Media Icons */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center space-x-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors duration-200"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors duration-200"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors duration-200"
              aria-label="Follow us on X (Twitter)"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs mx-auto border-t border-green-600 mb-4" />

        {/* Responsive Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-green-600 gap-y-2 text-center md:text-left">
          {/* Left Links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 text-xs">
            <Link
              href="/privacy"
              className="hover:text-green-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-green-700 transition-colors"
            >
              Terms of Service
            </Link>
            <span>•</span>
            <Link
              href="/contact"
              className="hover:text-green-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Copyright */}
          <div className="text-xs">
            © {new Date().getFullYear()} MelStore. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
