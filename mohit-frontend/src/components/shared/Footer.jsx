// import React from 'react'

// function Fotter() {
//   return (
//     <div>Fotter</div>
//   )
// }

// export default Fotter

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">CrowdLift</h2>
          <p className="text-sm leading-6">
            Empowering dreamers and innovators through community-driven funding.
            Join us to support meaningful projects that change the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/browse" className="hover:text-indigo-400 transition">
                Explore Campaigns
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Popular Categories</h3>
          
          <ul className="space-y-2 text-sm">
            <li><Link to="campaign">Science & AI </Link></li>
            <li><Link to="campaign">Technology</Link></li>
            <li><Link to="campaign">Education</Link></li>
            <li><Link to="campaign">Health & Wellness</Link></li>
            <li><Link to="campaign">Environment</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CrowdLift. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
