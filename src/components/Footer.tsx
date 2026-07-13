"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FreeTrial from "./home/FreeTrial";

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'whatsapp':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
      );
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
      );
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
      );
    case 'youtube':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
      );
    default:
      return null;
  }
};

export function Footer() {
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

  return (
    <footer className="text-white py-16 px-4 sm:px-6 lg:px-8 mt-auto" style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="text-center max-w-4xl mb-8 mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-8">
            <span className="inline-block align-middle mr-3 -mt-2">
              <Image
                src="/images/footer logo.png"
                alt="TZI Footer Logo"
                width={85}
                height={40}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </span>
            CRM is your all-in-one platform for managing clients, streamlining workflows, and accelerating business growth.
          </h2>
          <button
            suppressHydrationWarning
            type="button"
            onClick={() => setIsFreeTrialOpen(true)}
            className="inline-block bg-white text-[#31373D] font-inter font-bold text-[15px] px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Start Your 14 Days Free Trial
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl mt-12 mb-16">
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/#features" className="text-white/80 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="/pricing" className="text-white/80 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li>
                <button 
                  suppressHydrationWarning
                  onClick={() => setIsFreeTrialOpen(true)} 
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer bg-transparent border-0 p-0 font-normal outline-none text-left"
                >
                  Free Trial
                </button>
              </li>
              <li><Link href="/#testimonials" className="text-white/80 hover:text-white transition-colors text-sm">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-white/80 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact-us" className="text-white/80 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="tel:+919952885799" className="text-white/80 hover:text-white transition-colors text-sm">+91 9952885799</Link></li>
              <li><Link href="mailto:sales@techzarinfo.com" className="text-white/80 hover:text-white transition-colors text-sm">sales@techzarinfo.com</Link></li>
              <li><span className="text-white/80 text-sm block leading-relaxed">No.3D, M.S Tower , 4th Floor,<br />Convent Rd, Cantonment,<br />Tiruchirappalli- 620001.</span></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><Link href="https://wa.me/919952885799" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="whatsapp" /> Whatsapp</Link></li>
              <li><Link href="https://www.linkedin.com/company/techzarinfo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="linkedin" /> Linkedin</Link></li>
              <li><Link href="https://www.instagram.com/techzarinfo.software?igsh=ZXF6MnVieXFqeWg4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="instagram" /> Instagram</Link></li>
              <li><Link href="https://www.facebook.com/share/1944Hd72q9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="facebook" /> Facebook</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="twitter" /> Twitter</Link></li>
              <li><Link href="https://youtube.com/@techzarinfochennai?si=fSaDwm1Ck-Vaz9Bh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="youtube" /> Youtube</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/70 text-sm mt-8">
          © 2026 TZI CRM . All rights reserved
        </div>
      </div>

      <FreeTrial isOpen={isFreeTrialOpen} onClose={() => setIsFreeTrialOpen(false)} />
    </footer>
  );
}
