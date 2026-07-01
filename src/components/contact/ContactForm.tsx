"use client";

import { useState, useMemo } from "react";
import PhoneInput, { getCountries, parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState<string | undefined>("");
  const [selectedCountry, setSelectedCountry] = useState<any>("GB");
  
  // Get all available countries and use static english names to prevent server/client hydration mismatch
  const countries = useMemo(() => {
    // We can require the default english translations from the package directly
    const en = require('react-phone-number-input/locale/en.json');
    return getCountries().map((code) => ({
      code,
      name: en[code] || code
    })).sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const handlePhoneChange = (value: string | undefined) => {
    setPhone(value);
    if (value) {
      const parsed = parsePhoneNumber(value);
      // Automatically update the country dropdown if the typed number belongs to a different country
      if (parsed && parsed.country && parsed.country !== selectedCountry) {
        setSelectedCountry(parsed.country);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Use the phone state
    data.phone = phone || "";
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setSuccess(true);
        form.reset();
        setPhone("");
        setSelectedCountry("GB");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-1/2 w-full mt-10 lg:mt-0 relative">
      {/* Custom Styles for react-phone-number-input to match our design */}
      <style>{`
        .PhoneInput {
          align-items: stretch;
        }
        .PhoneInputCountry {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px 0 16px;
          border-right: 1px solid #d1d5db;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .PhoneInputCountry:hover {
          background-color: #e5e7eb;
        }
        .PhoneInputCountryIcon {
          width: 24px;
          height: 16px;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1) !important;
          border: none !important;
          background-color: transparent !important;
        }
        .PhoneInputCountryIconImg {
          border-radius: 2px;
        }
        .PhoneInputCountrySelectArrow {
          width: 0.4em;
          height: 0.4em;
          margin-left: 6px;
          border-right-width: 2px !important;
          border-bottom-width: 2px !important;
          border-color: #4b5563 !important;
          opacity: 1 !important;
        }
        .PhoneInputInput {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          padding: 14px 16px;
          outline: none;
          font-weight: 500;
          color: #1f2937;
        }
      `}</style>

      <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-3xl w-full max-w-xl mx-auto lg:ml-auto">
        {success ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-8">Thank you for getting in touch. Our team will contact you shortly.</p>
            <button type="button" onClick={() => setSuccess(false)} className="bg-[#3ab3fb] hover:bg-[#2c9be0] text-white font-medium px-8 py-3 rounded-full transition-colors">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Name<span className="text-red-500">*</span></label>
              <input name="name" required className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all font-medium text-gray-800" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Country<span className="text-red-500">*</span></label>
              <div className="relative">
                <select 
                  name="country" 
                  required 
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3.5 appearance-none focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all cursor-pointer font-medium text-gray-800"
                >
                  <option value="" disabled>Select a country</option>
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Mail ID<span className="text-red-500">*</span></label>
              <input type="email" name="email" required className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all font-medium text-gray-800" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Mobile Number<span className="text-red-500">*</span></label>
              <PhoneInput
                international
                country={selectedCountry}
                onCountryChange={setSelectedCountry}
                value={phone}
                onChange={handlePhoneChange}
                className="w-full bg-[#f0f2f5] rounded-xl focus-within:ring-2 focus-within:ring-[#3b82f6] transition-all overflow-hidden"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Share Your Requirements<span className="text-red-500">*</span></label>
              <textarea name="requirements" required rows={4} className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all resize-none font-medium text-gray-800"></textarea>
            </div>

            <button type="submit" disabled={loading} className="mt-2 mx-auto bg-[#3ab3fb] hover:bg-[#2c9be0] text-white font-medium px-10 py-3 rounded-full transition-all hover:shadow-lg disabled:opacity-70 disabled:hover:shadow-none">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
