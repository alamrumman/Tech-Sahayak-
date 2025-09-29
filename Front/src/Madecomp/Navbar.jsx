import React from "react";
import Langtoggle from "./Langtoggle";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <section className="flex w-full items-center justify-between px-6 shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="bg-zinc-100 hover:bg-zinc-200 transition-colors duration-200 rounded-2xl px-4 py-2">
          <a
            href="/"
            className="text-xl font-bold text-zinc-800 hover:text-green-600 transition-colors duration-200 font-inter"
          >
            AgroAi
          </a>
        </div>
      </div>

      {/* Main Navigation (Desktop) */}
      <div className="hidden lg:flex">
        <nav className="bg-zinc-100 rounded-2xl px-6 py-2 shadow-sm">
          <ul className="flex items-center space-x-8">
            <li>
              <a
                href="/"
                className="text-zinc-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zinc-200"
              >
                {t("navbar.home")}
              </a>
            </li>
            <li className="relative group">
              <button className="text-zinc-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zinc-200 flex items-center">
                {t("navbar.services")}
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
                    {t("navbar.crop_analysis")}
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-zinc-700 hover:text-green-600 hover:bg-zinc-50 transition-colors duration-200"
                  >
                    {t("navbar.weather_insights")}
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zinc-200"
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                {t("navbar.get_started")}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contact Section (Desktop) */}
      <div className="hidden lg:flex items-center">
        <div className="bg-zinc-100 text-black hover:bg-zinc-200 transition-colors duration-200 rounded-2xl px-4 py-2">
          <Langtoggle />
        </div>
      </div>

      {/* Mobile Menu Button (Drawer Trigger) */}
      <div className="lg:hidden drawer-end">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="mobile-drawer"
            className="fixed top-4 right-4 z-50 bg-zinc-100 hover:bg-zinc-200 p-2 rounded-lg shadow-md transition-colors duration-200 cursor-pointer"
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
          </label>
        </div>

        {/* Drawer Sidebar (Mobile Nav) */}
        <div className="drawer-side z-40">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
          <ul className="menu bg-white text-zinc-700 min-h-full w-80 p-4 space-y-4">
            {/* LangToggle added here */}
            <li className="pt-2 border-t border-zinc-200">
              <Langtoggle />
            </li>
            <li>
              <a href="#" className="hover:text-green-600 font-medium">
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <p className="text-zinc-600 font-medium">
                {t("navbar.services")}
              </p>
              <ul className="pl-4 space-y-1">
                <li>
                  <a href="#" className="hover:text-green-600 text-sm">
                    {t("navbar.crop_analysis")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 text-sm">
                    {t("navbar.weather_insights")}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 font-medium">
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 font-medium">
                {t("navbar.contact")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-center py-2 mt-2"
              >
                {t("navbar.get_started")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
