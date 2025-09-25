import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="flex w-full items-center justify-between px-6  shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="bg-zinc-100 hover:bg-zinc-200 transition-colors duration-200 rounded-2xl px-4 py-2">
          <a
            href="#"
            className="text-xl font-bold text-zinc-800 hover:text-green-600 transition-colors duration-200 font-inter"
          >
            AgroAi
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="hidden lg:flex">
        <nav className="bg-zinc-100 rounded-2xl px-6 py-2 shadow-sm">
          <ul className="flex items-center space-x-8">
            <li>
              <a
                href="#"
                className="text-zinc-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zinc-200"
              >
                Home
              </a>
            </li>
            <li className="relative group">
              <button className="text-zinc-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zinc-200 flex items-center">
                Services
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-zinc-700 hover:text-green-600 hover:bg-zinc-50 transition-colors duration-200"
                  >
                    Crop Analysis
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-zinc-700 hover:text-green-600 hover:bg-zinc-50 transition-colors duration-200"
                  >
                    Weather Insights
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zinc-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contact Section */}
      <div className="hidden lg:flex items-center">
        <div className="bg-zinc-100 hover:bg-zinc-200 transition-colors duration-200 rounded-2xl px-4 py-2">
          <a
            href="#"
            className="text-xl font-semibold text-zinc-800 hover:text-green-600 transition-colors duration-200 font-inter"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-zinc-100 hover:bg-zinc-200 p-2 rounded-lg transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-zinc-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-6 lg:hidden">
          <div className="bg-white rounded-2xl shadow-lg border border-zinc-200 py-4">
            <div className="px-4 space-y-2">
              <a
                href="#"
                className="block py-3 px-4 text-zinc-700 hover:text-green-600 hover:bg-zinc-50 rounded-lg font-medium transition-colors duration-200"
              >
                Home
              </a>
              <div className="border-l-2 border-zinc-200 ml-4 pl-4 space-y-2">
                <p className="text-zinc-600 font-medium text-sm">Services</p>
                <a
                  href="#"
                  className="block py-2 px-4 text-zinc-600 hover:text-green-600 hover:bg-zinc-50 rounded-lg transition-colors duration-200"
                >
                  Crop Analysis
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-zinc-600 hover:text-green-600 hover:bg-zinc-50 rounded-lg transition-colors duration-200"
                >
                  Weather Insights
                </a>
              </div>
              <a
                href="#"
                className="block py-3 px-4 text-zinc-700 hover:text-green-600 hover:bg-zinc-50 rounded-lg font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="block py-3 px-4 text-zinc-700 hover:text-green-600 hover:bg-zinc-50 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Us
              </a>
              <div className="pt-2">
                <a
                  href="#"
                  className="block py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-center transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
