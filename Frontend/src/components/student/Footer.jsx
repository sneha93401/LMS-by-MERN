import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* Left-Aligned Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-left">

          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">Edemy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry the printing and typesetting industry.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-6">Subscribe to our newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <div className="flex gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 
                text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-2.5 rounded-lg"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            Copyright 2024 © GreatStack. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
