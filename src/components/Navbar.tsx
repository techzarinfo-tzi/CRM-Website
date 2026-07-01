import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-20 py-4 bg-white border-b border-gray-100 shadow-sm">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/TZI-Logo.png"
          alt="TZI Logo"
          width={72}
          height={30}
          priority
        />
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <li>
          <Link href="#" className="hover:text-blue-500 transition-colors">Features</Link>
        </li>
        <li>
          <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
            Solutions
            <svg className="w-3.5 h-3.5 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </li>
        <li>
          <Link href="#" className="hover:text-blue-500 transition-colors">Integrations</Link>
        </li>
        <li>
          <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
            Company
            <svg className="w-3.5 h-3.5 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link>
        </li>
        <li>
          <Link href="/pricing" className="hover:text-blue-500 transition-colors">Pricing</Link>
        </li>
      </ul>

      {/* CTA buttons */}
      <div className="flex items-center gap-2">
        <Link
          href="#"
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
        >
          Free Trial
        </Link>
        <Link
          href="#"
          className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
        >
          Schedule a Demo
        </Link>
      </div>
    </nav>
  );
}
