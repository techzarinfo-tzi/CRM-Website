"use client";

import { ComponentType, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { getCountries, Country } from "react-phone-number-input";
import rawFlags from "react-phone-number-input/flags";

type FlagComponent = ComponentType<{ title?: string; className?: string }>;
const flags = rawFlags as Partial<Record<Country, FlagComponent>>;

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const INDUSTRIES = [
  "Retail",
  "Real Estate",
  "Healthcare",
  "Education",
  "IT / Software",
  "Finance",
  "Manufacturing",
  "Hospitality",
  "Other",
];

const SUBSCRIPTION_PACKAGES = ["Starter", "Professional", "Enterprise"];

interface FreeTrialProps {
  isOpen: boolean;
  onClose: () => void;
}

const PASSWORD_RULE = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
// Requires a real-looking local part, valid domain labels, and a 2+ letter TLD.
// Rejects leading/trailing/consecutive dots, spaces, multiple @, and malformed domains.
const EMAIL_RULE =
  /^[a-zA-Z0-9_%+-]+(?:\.[a-zA-Z0-9_%+-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

export default function FreeTrial({ isOpen, onClose }: FreeTrialProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{ code: Country; name: string } | null>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  const countries = useMemo(() => {
    const en = require("react-phone-number-input/locale/en.json");
    return getCountries()
      .map((code) => ({ code, name: en[code] || code }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  useEffect(() => {
    if (!countryOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [countryOpen]);

  if (!isOpen) return null;

  const clearFieldError = (name: string) => {
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = (data: Record<string, FormDataEntryValue>) => {
    const errors: Record<string, string> = {};

    const email = String(data.email || "").trim();
    if (!email) {
      errors.email = "Business email is required";
    } else if (!EMAIL_RULE.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    const password = String(data.password || "");
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!PASSWORD_RULE.test(password)) {
      errors.password =
        "Password must be at least 8 characters and include a letter, a number, and a symbol";
    }

    if (!String(data.name || "").trim()) {
      errors.name = "Name is required";
    }

    if (!String(data.businessName || "").trim()) {
      errors.businessName = "Business name is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/free-trial/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (result?.field === "email" || result?.field === "businessName") {
          setFieldErrors({ [result.field]: result.error || "This value is already taken." });
          return;
        }
        throw new Error(result?.error || result?.message || "Something went wrong. Please try again.");
      }

      setSuccess(true);
      form.reset();
      setSelectedCountry(null);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError("");
    setFieldErrors({});
    setShowPassword(false);
    setCountryOpen(false);
    setSelectedCountry(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-8"
      onClick={handleClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {success ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re all set!</h3>
            <p className="text-gray-600 mb-8">
              We&apos;ve emailed your login details. Sign in to start your 14 days free trial.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="text-white font-medium px-10 py-3 rounded-full transition-all hover:shadow-lg hover:opacity-95"
              style={{ background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)" }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/images/TZI.png"
                alt="TZI"
                width={44}
                height={44}
                className="object-contain"
                style={{ width: "auto", height: "44px" }}
              />
              <span className="text-2xl font-bold text-gray-900">CRM</span>
            </div>

            {/* Subtitle */}
            <p className="text-center text-gray-500 mb-8">
              Start Your 14 Days Free Trial
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-800">Business Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  onChange={() => clearFieldError("email")}
                  className={`w-full bg-[#f0f2f5] border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all text-gray-800 placeholder:text-gray-400 ${
                    fieldErrors.email ? "border-red-400" : "border-transparent"
                  }`}
                />
                {fieldErrors.email && (
                  <span className="text-xs text-red-500">{fieldErrors.email}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-800">Industry</label>
                <div className="relative">
                  <select
                    name="industry"
                    defaultValue=""
                    className="w-full bg-[#f0f2f5] border-none rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all cursor-pointer text-gray-800"
                  >
                    <option value="" disabled>Select Industry</option>
                    {INDUSTRIES.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-800">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Min. 8 characters"
                    onChange={() => clearFieldError("password")}
                    className={`w-full bg-[#f0f2f5] border rounded-lg px-4 py-3 pr-11 focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all text-gray-800 placeholder:text-gray-400 ${
                      fieldErrors.password ? "border-red-400" : "border-transparent"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <path d="M1 1l22 22" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {fieldErrors.password ? (
                  <span className="text-xs text-red-500">{fieldErrors.password}</span>
                ) : (
                  <span className="text-xs text-gray-400">
                    Min. 8 characters with a letter, a number and a symbol
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-800">Country</label>
                <div className="relative" ref={countryRef}>
                  <input type="hidden" name="country" value={selectedCountry?.name || ""} />
                  <button
                    type="button"
                    onClick={() => setCountryOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between gap-2 bg-[#f0f2f5] border-none rounded-lg px-4 py-3 text-left focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all cursor-pointer text-gray-800"
                  >
                    <span className="flex items-center gap-2 truncate">
                      {selectedCountry ? (
                        <>
                          <span className="inline-block w-5 h-[14px] overflow-hidden rounded-[2px] flex-shrink-0">
                            {(() => {
                              const FlagIcon = flags[selectedCountry.code];
                              return FlagIcon ? (
                                <FlagIcon title={selectedCountry.name} className="w-full h-full block" />
                              ) : null;
                            })()}
                          </span>
                          <span className="truncate">{selectedCountry.name}</span>
                        </>
                      ) : (
                        <span className="text-gray-500">Select Country</span>
                      )}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-gray-500"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  {countryOpen && (
                    <div className="absolute z-20 mt-1 w-full max-h-60 overflow-y-auto rounded-lg bg-white shadow-lg border border-gray-100">
                      {countries.map((c) => {
                        const FlagIcon = flags[c.code];
                        return (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(c);
                              setCountryOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 text-gray-800 text-sm"
                          >
                            <span className="inline-block w-5 h-[14px] overflow-hidden rounded-[2px] flex-shrink-0">
                              {FlagIcon && <FlagIcon title={c.name} className="w-full h-full block" />}
                            </span>
                            <span className="truncate">{c.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={() => clearFieldError("name")}
                  className={`w-full bg-[#f0f2f5] border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all text-gray-800 ${
                    fieldErrors.name ? "border-red-400" : "border-transparent"
                  }`}
                />
                {fieldErrors.name && (
                  <span className="text-xs text-red-500">{fieldErrors.name}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-800">Subscription Package</label>
                <div className="relative">
                  <select
                    name="subscriptionPackage"
                    defaultValue=""
                    className="w-full bg-[#f0f2f5] border-none rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all cursor-pointer text-gray-800"
                  >
                    <option value="" disabled>Select Package</option>
                    {SUBSCRIPTION_PACKAGES.map((pkg) => (
                      <option key={pkg} value={pkg}>{pkg}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-800">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  onChange={() => clearFieldError("businessName")}
                  className={`w-full bg-[#f0f2f5] border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all text-gray-800 ${
                    fieldErrors.businessName ? "border-red-400" : "border-transparent"
                  }`}
                />
                {fieldErrors.businessName && (
                  <span className="text-xs text-red-500">{fieldErrors.businessName}</span>
                )}
              </div>

              {error && (
                <p className="md:col-span-2 text-sm text-red-500 text-center -mb-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 mt-2 text-white font-semibold px-10 py-3.5 rounded-lg transition-all hover:shadow-lg hover:opacity-95 disabled:opacity-70 disabled:hover:shadow-none"
                style={{ background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)" }}
              >
                {loading ? "Creating your account..." : "Get Started"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
