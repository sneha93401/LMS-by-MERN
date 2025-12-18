import React from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react' // icons [web:22][web:24]

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full px-8 border-t py-4 text-gray-500 text-xs md:text-sm">
      {/* left side text */}
      <p>
        Copyright 2025 © LearnHub. All Rights Reserved.
      </p>

      {/* right side social icons */}
      <div className="flex items-center gap-4 text-lg">
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          className="hover:text-blue-600 transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
