"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-600 shadow-lg w-full fixed top-0 left-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <div className="text-white font-bold text-xl">
                Northfield Bank
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
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
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <Link
                href="/dashboard"
                className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/accounts"
                className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Accounts
              </Link>
              <Link
                href="/transfers"
                className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Transfers
              </Link>
              <Link
                href="/profile"
                className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/dashboard"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/accounts"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Accounts
            </Link>
            <Link
              href="/transfers"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Transfers
            </Link>
            <Link
              href="/profile"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
