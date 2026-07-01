import Link from "next/link";

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'whatsapp':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      );
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      );
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
      );
    default:
      return null;
  }
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#3fa5ff] via-[#378ce7] to-[#1c55d5] text-white py-16 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="text-center max-w-4xl mb-8">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-8">
            <span className="font-extrabold mr-2">TZI</span>
            CRM is your all-in-one platform for managing clients, automating workflows and accelerating business growth.
          </h2>
          <Link
            href="#free-trial"
            className="inline-block bg-white text-[#378ce7] font-semibold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Start Your 14 Days Free Trial
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl mt-12 mb-16">
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Free Demo</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">CRM for Small Business</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">CRM for Startups</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">CRM for Enterprises</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Sales CRM</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="invisible font-semibold text-lg mb-4">Social</h3> {/* Invisible header to align with others */}
            <ul className="space-y-3">
              <li><Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="whatsapp" /> Whatsapp</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="linkedin" /> Linkedin</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="instagram" /> Instagram</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="facebook" /> Facebook</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"><SocialIcon type="twitter" /> Twitter</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/70 text-sm mt-8">
          © 2026 TZI CRM . All rights reserved
        </div>
      </div>
    </footer>
  );
}
