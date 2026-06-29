import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/images/TZI.png";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="TZI Logo"
                width={80}
                height={32}
                className="w-auto h-8"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
              Features
            </Link>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 group-hover:text-blue-600 font-medium text-sm transition-colors">
                Solutions
              </span>
              <span className="text-gray-500 group-hover:text-blue-600 transition-colors">
                <ChevronDownIcon />
              </span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 group-hover:text-blue-600 font-medium text-sm transition-colors">
                Company
              </span>
              <span className="text-gray-500 group-hover:text-blue-600 transition-colors">
                <ChevronDownIcon />
              </span>
            </div>
            <Link href="#blog" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
              Blog
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="#free-trial"
              className="text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              Free Trial
            </Link>
            <Link
              href="#product-tour"
              className="text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg px-4 py-2 shadow-sm shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
            >
              Product Tour
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
