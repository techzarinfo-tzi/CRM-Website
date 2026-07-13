"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import FreeTrial from "./home/FreeTrial";
import ScheduleDemo from "./home/ScheduleDemo";

export function Navbar() {
  const pathname = usePathname() || "";
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyDropdownOpen, setIsMobileCompanyDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const featuresEl = document.getElementById("features");
      if (featuresEl) {
        const rect = featuresEl.getBoundingClientRect();
        // If the top of the features section is near or above the middle of viewport, and bottom is below it
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection("#features");
        } else {
          setActiveSection("");
        }
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleScrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("features");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 lg:px-8 xl:px-20 py-4 relative z-50 bg-white">
        {/* Logo */}
        <Link href="/" className="relative block">
          <Image
            src="/images/TZI-Logo.png"
            alt="TZI Logo"
            width={140}
            height={140}
            priority
            className="w-[110px] min-w-[110px] shrink-0 h-auto object-contain object-left"
          />
        </Link>

        {/* Nav links */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link
              href="/#features"
              className={`${activeSection === "#features" && pathname === "/" ? "text-blue-500 font-semibold" : "hover:text-blue-500"} transition-colors`}
              onClick={handleScrollToFeatures}
            >
              Features
            </Link>
          </li>
          <li>
            <button suppressHydrationWarning className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              Solutions
              <svg className="w-3.5 h-3.5 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li>
            <Link href="/integrations" className={`${isActive("/integrations") ? "text-blue-500 font-semibold" : "hover:text-blue-500"} transition-colors`}>Integrations</Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
          >
            <button
              suppressHydrationWarning
              className={`flex items-center gap-1 ${pathname.includes("/about-us") || pathname.includes("/contact-us") ? "text-blue-500 font-semibold" : "hover:text-blue-500"} transition-colors py-4`}
              onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
            >
              Company
              <svg className={`w-3.5 h-3.5 mt-px transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 ${isCompanyDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="bg-[#f4f7fe] rounded-[20px] p-5 flex flex-col gap-5 shadow-lg min-w-[180px]">
                <Link href="/about-us" className="flex items-center gap-3 text-gray-900 hover:text-blue-500 transition-colors text-[16px] font-medium">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  About Us
                </Link>
                <Link href="/contact-us" className="flex items-center gap-3 text-gray-900 hover:text-blue-500 transition-colors text-[16px] font-medium">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/help" className={`${isActive("/help") ? "text-blue-500 font-semibold" : "hover:text-blue-500"} transition-colors`}>Help</Link>
          </li>
          <li>
            <Link href="/pricing" className={`${isActive("/pricing") ? "text-blue-500 font-semibold" : "hover:text-blue-500"} transition-colors`}>Pricing</Link>
          </li>
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            suppressHydrationWarning
            type="button"
            onClick={() => setIsFreeTrialOpen(true)}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
          >
            Free Trial
          </button>
          <button
            suppressHydrationWarning
            type="button"
            onClick={() => setIsScheduleDemoOpen(true)}
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all hover:shadow-lg hover:opacity-95 cursor-pointer"
            style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
          >
            Schedule a Demo
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          suppressHydrationWarning
          className="lg:hidden p-2 text-gray-700 hover:text-blue-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-700">
            <li>
              <Link
                href="/#features"
                className={`block ${activeSection === "#features" && pathname === "/" ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
                onClick={handleScrollToFeatures}
              >
                Features
              </Link>
            </li>
            <li>
              <Link href="/integrations" className={`block ${isActive("/integrations") ? "text-blue-500" : "hover:text-blue-500"}`} onClick={() => setIsMobileMenuOpen(false)}>Integrations</Link>
            </li>
            <li>
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileCompanyDropdownOpen(!isMobileCompanyDropdownOpen)}
                  className={`flex items-center justify-between w-full font-medium transition-colors ${pathname.includes("/about-us") || pathname.includes("/contact-us") ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                >
                  Company
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileCompanyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`pl-4 flex flex-col gap-3 text-sm border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${isMobileCompanyDropdownOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 m-0"}`}>
                  <Link href="/about-us" className="hover:text-blue-500 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                  <Link href="/contact-us" className="hover:text-blue-500 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/help" className={`block ${isActive("/help") ? "text-blue-500" : "hover:text-blue-500"}`} onClick={() => setIsMobileMenuOpen(false)}>Help</Link>
            </li>
            <li>
              <Link href="/pricing" className={`block ${isActive("/pricing") ? "text-blue-500" : "hover:text-blue-500"}`} onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsFreeTrialOpen(true);
              }}
              className="w-full px-5 py-3 text-center text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
            >
              Free Trial
            </button>
            <button
              suppressHydrationWarning
              type="button"
              className="w-full px-5 py-3 text-center text-sm font-semibold text-white rounded-xl transition-all cursor-pointer"
              style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsScheduleDemoOpen(true);
              }}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      <FreeTrial isOpen={isFreeTrialOpen} onClose={() => setIsFreeTrialOpen(false)} />
      <ScheduleDemo isOpen={isScheduleDemoOpen} onClose={() => setIsScheduleDemoOpen(false)} />
    </nav>
  );
}
