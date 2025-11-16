import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#", current: true },
    { name: "About", href: "#", current: false },
    { name: "Services", href: "#", current: false },
    { name: "Portfolio", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];

  return (
    <div className="p-8 w-full bg-white dark:bg-black">

      <nav className="bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  ReactRouter
                </h2>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8 ">
                <ul className="flex justify-center gap-10 w-fit px-10">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({isActive}) => 
                                ` ${isActive ? "text-blue-300" : "text-white"}`
                            }>
                            Home
                        </NavLink>                        
                    </li>

                    <li>
                        <NavLink 
                            to="/feature" 
                            className={({isActive}) => 
                                ` ${isActive ? "text-blue-300" : "text-white"}`
                            }>
                            Feature
                        </NavLink>                        
                    </li>

                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({isActive}) => 
                                ` ${isActive ? "text-blue-300" : "text-white"}`
                            }>
                            Contact
                        </NavLink>                        
                    </li>
                    <li>
                        <NavLink 
                            to="/githubinfo" 
                            className={({isActive}) => 
                                ` ${isActive ? "text-blue-300" : "text-white"}`
                            }>
                            GitHUB Info
                        </NavLink>                        
                    </li>
                    
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Sign In
              </button>
              <button className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                Get Started
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    item.current
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-200 dark:border-zinc-800 pt-4 mt-4">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white mt-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
