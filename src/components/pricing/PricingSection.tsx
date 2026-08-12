"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FreeTrial from "../home/FreeTrial";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-red-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);

type ApiBillingCycle = "monthly" | "half_yearly" | "yearly";
type UiBillingCycle = "6_months" | "yearly";

interface ApiTier {
  billing_cycle: ApiBillingCycle;
  price: number;
  duration_months: number;
  grace_days: number;
}

interface ApiPlan {
  _id: string;
  plan_name: string;
  plan_code: string;
  plan_type: "free" | "paid" | "enterprise";
  description?: string;
  currency: string;
  tiers: ApiTier[];
  max_users_per_tenant: number;
  features: Record<string, boolean>;
  is_recommended: boolean;
  sort_order: number;
}

// Mirrors FEATURE_GROUPS in the superadmin PlanForm's feature checklist
// (src/components/superadmin/plans/PlanForm.jsx) — same groups, keys and
// labels as what the superadmin actually selects, minus the "Lead Source
// Integrations" group, which is rendered separately below (INTEGRATIONS).
const FEATURE_SECTIONS: { title: string; keys: string[] }[] = [
  { title: "Core Modules", keys: ["dashboard", "leads", "create_lead", "deals_all", "create_deal", "deals_pipeline"] },
  { title: "Documents", keys: ["invoices", "proposal", "documents"] },
  { title: "Communication", keys: ["email_chat", "email_campaigns", "whatsapp_chat", "messages", "chatbot"] },
  { title: "Reports & Engagement", keys: ["analytics", "streak_leaderboard"] },
  { title: "Tasks & Targets", keys: ["task_management", "target_management", "assigned_tasks"] },
  { title: "Meetings", keys: ["meetings", "google_meet_sync", "zoom_meetings", "schedule_view"] },
  { title: "Administration", keys: ["users_roles", "admin_access", "settings"] },
  { title: "Security & Tracking", keys: ["device_login_requests", "live_tracking"] },
];

const FEATURE_LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  leads: "Leads",
  create_lead: "Create Lead",
  deals_all: "Deals",
  create_deal: "Create Deal",
  deals_pipeline: "Pipeline View",
  invoices: "Invoices",
  proposal: "Proposal",
  documents: "Document Center",
  email_chat: "Email Chat",
  email_campaigns: "Email Campaigns",
  whatsapp_chat: "WhatsApp Chat",
  messages: "Internal Messages",
  chatbot: "AI Chatbot Assistant",
  analytics: "Analytics",
  streak_leaderboard: "Streak Leaderboard",
  task_management: "Task Management",
  target_management: "Target Management",
  assigned_tasks: "Assigned Tasks",
  meetings: "Meetings Scheduler",
  google_meet_sync: "Google Meet Sync",
  zoom_meetings: "Zoom Meetings",
  schedule_view: "Calendar",
  users_roles: "Users & Roles",
  admin_access: "Admin Access",
  settings: "Settings",
  device_login_requests: "Device Login Requests",
  live_tracking: "Live Location Tracking",
  integration_facebook: "Facebook & Instagram",
  integration_linkedin: "LinkedIn",
  integration_justdial: "Justdial",
  integration_indiamart: "IndiaMART",
  integration_99acres: "99acres",
  integration_sulekha: "Sulekha",
};

const INTEGRATIONS: { key: string; name: string; icon: string }[] = [
  { key: "integration_facebook", name: "Facebook & Instagram Lead Ads", icon: "/images/pricing/facebook logo.svg" },
  { key: "integration_linkedin", name: "LinkedIn Lead Gen Campaigns", icon: "/images/pricing/linkedin logo.svg" },
  { key: "integration_justdial", name: "Justdial Lead Webhook", icon: "/images/pricing/justdial-seeklogo 1.svg" },
  { key: "integration_indiamart", name: "IndiaMART Leads Pull API", icon: "/images/pricing/IndiaMART Symbol PNG 1.svg" },
  { key: "integration_99acres", name: "99acres Webhook Integration", icon: "/images/pricing/99acres.svg" },
  { key: "integration_sulekha", name: "Sulekha Lead Webhook", icon: "/images/pricing/Sulekha Icon 1.svg" },
];

const INCLUDES_PANEL_KEYS = [
  ...FEATURE_SECTIONS.flatMap((section) => section.keys),
  ...INTEGRATIONS.map((i) => i.key),
];

// Free Trial and Enterprise are fixed offerings that don't come from the
// plan-management backend — only the paid tiers in between are configured
// there and fetched dynamically.
const FREE_PLAN = {
  name: "Free Trial",
  usersLabel: "All users",
  tag: "14 Days",
  features: [
    "14-day full access",
    "No card required",
    "Leads management",
    "Deals management",
    "Drag-and-drop pipeline view",
    "Smart proposals",
    "Digital invoicing",
    "Meetings scheduler",
    "Team analytics",
    "Users & roles (RBAC)",
    "Email chat",
    "Deal analysis (pricing recommendation)",
    "Target & task management",
  ],
};

const ENTERPRISE_PLAN = {
  name: "Enterprise",
  usersLabel: "20+ users",
  tag: "Unlimited",
  features: [
    "Identical feature set to Cruise/Accelerate",
    "White-label option",
    "Custom user limits",
  ],
};

const usersLabel = (plan: ApiPlan) => (!plan.max_users_per_tenant ? "Unlimited users" : `Up to ${plan.max_users_per_tenant} users`);

const getTier = (plan: ApiPlan, cycle: ApiBillingCycle) =>
  plan.tiers?.find((t) => t.billing_cycle === cycle);

const tagForPlan = (plan: ApiPlan) => (plan.is_recommended ? "Recommended" : undefined);

export function PricingSection() {
  const [plans, setPlans] = useState<ApiPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [selection, setSelection] = useState<"free" | "enterprise" | "paid">("free");
  const [billing, setBilling] = useState<UiBillingCycle>("yearly");
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`${BACKEND_URL}/api/superadmin/subscription-plans/public/landing`)
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        if (json.success && Array.isArray(json.data)) {
          const paid = json.data
            .filter((p: ApiPlan) => p.plan_type === "paid")
            .sort((a: ApiPlan, b: ApiPlan) => a.sort_order - b.sort_order);
          setPlans(paid);
        }
      })
      .catch((err) => console.error("Failed to load subscription plans:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const displayedPlans = plans
    .filter((p) => {
      const cycle: ApiBillingCycle = billing === "6_months" ? "half_yearly" : "yearly";
      return !!getTier(p, cycle);
    })
    .sort((a, b) => (a.max_users_per_tenant || Infinity) - (b.max_users_per_tenant || Infinity));

  const maxSliderIndex = Math.max(displayedPlans.length - 1, 0);
  const safeSliderIndex = Math.min(sliderIndex, maxSliderIndex);
  const selectedPlan = displayedPlans[safeSliderIndex];

  // The slider spans Free Trial -> each paid plan -> Enterprise, so position
  // 0 is Free, the last position is Enterprise, and the paid plans (fetched
  // dynamically) sit in between.
  const maxPos = displayedPlans.length + 1;
  const currentPos = selection === "free" ? 0 : selection === "enterprise" ? maxPos : 1 + safeSliderIndex;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pos = parseInt(e.target.value, 10);
    if (pos === 0) {
      setSelection("free");
    } else if (pos === maxPos) {
      setSelection("enterprise");
    } else {
      setSliderIndex(pos - 1);
      setSelection("paid");
    }
  };

  const renderCardPrice = (plan: ApiPlan, isSelected: boolean) => {
    const primaryCycle: ApiBillingCycle = billing === "6_months" ? "half_yearly" : "yearly";
    const altCycle: ApiBillingCycle = billing === "6_months" ? "yearly" : "half_yearly";
    const primaryTier = getTier(plan, primaryCycle) || getTier(plan, "monthly");
    const altTier = getTier(plan, altCycle);

    if (!primaryTier) {
      return (
        <div className={`px-5 py-2 rounded-lg text-sm font-semibold border ${isSelected ? "bg-white text-blue-600 border-white" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}>
          <Link href="/contact-us">Contact us</Link>
        </div>
      );
    }

    const cycleSuffix = primaryTier.billing_cycle === "half_yearly" ? "/6mo" : primaryTier.billing_cycle === "yearly" ? "/yr" : "/mo";

    return (
      <>
        <div className="text-2xl sm:text-3xl font-medium">
          ₹{primaryTier.price.toLocaleString()}
          <span className={`font-normal text-lg sm:text-2xl ${isSelected ? "text-white/80" : "text-gray-500"}`}>{cycleSuffix}</span>
        </div>
        {altTier && (
          <div className={`text-sm mt-0.5 ${isSelected ? "text-white/90" : "text-gray-500"}`}>
            or ₹{altTier.price.toLocaleString()} {altTier.billing_cycle === "half_yearly" ? "for 6 months" : "per year"}
          </div>
        )}
      </>
    );
  };

  return (
    <section id="pricing" className="py-12 md:py-20 lg:py-24 px-6 max-w-6xl mx-auto bg-white min-h-screen scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-gray-900 mb-4 md:mb-6 flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-4 md:whitespace-nowrap text-[48px] sm:text-[64px] md:text-[92px] leading-[1.1] md:leading-[80px] tracking-tight md:tracking-[-3.6px]">
          <span className="relative inline-block text-[#1a1a1a]">
            Pay
            {/* Red marker scribble */}
            <svg
              className="absolute left-[-5%] top-1/2 w-[110%] h-10 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <path d="M 2,20 Q 30,17 60,19 T 98,18" stroke="#dc2626" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 5,25 Q 40,23 70,26 T 95,24" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 0,29 Q 45,28 80,30 T 100,29" stroke="#dc2626" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          <div className="relative inline-flex items-center justify-center mx-2 md:mx-6 w-[160px] h-[55px] sm:w-[220px] sm:h-[70px] md:w-[275px] md:h-[88px]">
            {/* Outer dashed lines with exact 12px overcrossing corners */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ width: '114%', height: '138%' }}
              viewBox="0 0 313 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line x1="0" y1="8" x2="313" y2="8" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="12 12" />
              <line x1="0" y1="114" x2="313" y2="114" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="12 12" />
              <line x1="8" y1="0" x2="8" y2="122" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="12 12" />
              <line x1="305" y1="0" x2="305" y2="122" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="12 12" />
            </svg>

            <div className="bg-[#f0f5ff] w-full h-full flex items-center justify-center z-10 relative overflow-hidden md:overflow-visible">
              <span className="transform translate-y-[-2px] md:translate-y-[-4px]" style={{ backgroundImage: 'linear-gradient(90deg, #3562F1 0%, #3B82F6 50%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Invest</span>
            </div>
          </div>
          <span className="text-black transform translate-y-[-2px] md:translate-y-[-4px] text-[36px] sm:text-[48px] md:text-[64px] tracking-tight md:tracking-[-1px]">in</span>
        </h1>
        <h2 className="text-gray-900 mb-4 text-center text-[32px] sm:text-[48px] md:text-[65px] leading-[1.2] md:leading-[80px] tracking-tight md:tracking-[-3.6px] px-2">
          What Matters Most for Your Business
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto px-4 text-[16px] sm:text-[20px] md:text-[24px] leading-relaxed md:leading-[32px] tracking-[-0.3px] font-normal">
          Our pricing is designed to deliver maximum value, giving your business
          access to powerful solutions without unnecessary costs
        </p>

        {/* Toggle */}
        <div className="mt-10 inline-flex bg-[#f3f4f6] rounded-xl p-1.5 border border-gray-200 shadow-sm">
          <button
            className={`px-8 py-2.5 rounded-lg text-sm font-semibold transition-all ${billing === '6_months' ? 'bg-white shadow text-[#1e1b4b]' : 'text-[#3730a3] hover:text-[#1e1b4b]'}`}
            onClick={() => setBilling('6_months')}
          >
            6 Months
          </button>
          <button
            className={`px-8 py-2.5 rounded-lg text-sm font-semibold transition-all ${billing === 'yearly' ? 'bg-white shadow text-[#1e1b4b]' : 'text-[#3730a3] hover:text-[#1e1b4b]'}`}
            onClick={() => setBilling('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 py-16">Loading plans...</div>
      ) : (
        <>
          {/* Slider */}
          <div className="mb-6 mx-auto px-4" style={{ width: '100%', maxWidth: '1211.5px' }}>
            <div className="relative w-full bg-gray-100 rounded-full flex items-center" style={{ height: '13.166px' }}>
              <div
                className="absolute h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${maxPos === 0 ? 0 : (currentPos / maxPos) * 100}%` }}
              />
              <input
                type="range"
                min="0"
                max={maxPos}
                step="1"
                value={currentPos}
                onChange={handleSliderChange}
                className="absolute w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div
                className="absolute w-6 h-6 bg-white border-[3px] border-blue-500 rounded-full shadow-md transform -translate-x-1/2 pointer-events-none z-20 transition-all duration-300 ease-in-out"
                style={{ left: `${maxPos === 0 ? 0 : (currentPos / maxPos) * 100}%` }}
              />
            </div>
            <div className="text-sm font-bold text-gray-900 mt-4 whitespace-nowrap" style={{ marginLeft: `calc(${maxPos === 0 ? 0 : (currentPos / maxPos) * 100}% - 24px)` }}>
              {selection === 'free' ? FREE_PLAN.usersLabel : selection === 'enterprise' ? ENTERPRISE_PLAN.usersLabel : selectedPlan ? usersLabel(selectedPlan) : ''}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto mb-20">
            {/* Plans List */}
            <div className="flex-1 space-y-4">
              {/* Free Trial — static, not part of the slider */}
              <div
                onClick={() => setSelection('free')}
                className={`cursor-pointer rounded-4xl p-5 sm:p-6 transition-all border ${selection === 'free'
                  ? 'border-transparent shadow-lg text-white transform md:scale-[1.02]'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm text-gray-900'
                  } flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
                style={selection === 'free' ? { background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' } : undefined}
              >
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{FREE_PLAN.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium ${selection === 'free' ? 'bg-white text-[#7c5ef2]' : 'bg-[#f0f5ff] text-[#7c5ef2]'}`}>
                    {FREE_PLAN.tag}
                  </span>
                </div>
                <div className="text-left sm:text-right flex flex-col items-start sm:items-end justify-center">
                  <div className={`px-5 py-2 rounded-lg text-sm font-semibold border ${selection === 'free' ? 'bg-white text-blue-600 border-white' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFreeTrialOpen(true);
                      }}
                    >
                      Free
                    </button>
                  </div>
                </div>
              </div>

              {displayedPlans.map((plan, idx) => {
                  const isSelected = selection === 'paid' && safeSliderIndex === idx;
                  const tag = tagForPlan(plan);
                  return (
                    <div
                      key={plan._id}
                      onClick={() => {
                        setSliderIndex(idx);
                        setSelection('paid');
                      }}
                      className={`cursor-pointer rounded-4xl p-5 sm:p-6 transition-all border ${isSelected
                        ? 'border-transparent shadow-lg text-white transform md:scale-[1.02]'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm text-gray-900'
                        } flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
                      style={isSelected ? { background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' } : undefined}
                    >
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold">{plan.plan_name}</h3>
                        {tag && (
                          <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium ${plan.is_recommended ? 'bg-[#fae8ff] text-[#c026d3]' : 'bg-gray-100 text-gray-600'}`}>
                            {tag}
                          </span>
                        )}
                      </div>
                      <div className="text-left sm:text-right flex flex-col items-start sm:items-end justify-center">
                        {renderCardPrice(plan, isSelected)}
                      </div>
                    </div>
                  );
              })}

              {/* Enterprise — static, not part of the slider */}
              <div
                onClick={() => setSelection('enterprise')}
                className={`cursor-pointer rounded-4xl p-5 sm:p-6 transition-all border ${selection === 'enterprise'
                  ? 'border-transparent shadow-lg text-white transform md:scale-[1.02]'
                  : 'bg-transparent border-gray-200 hover:border-blue-300 hover:bg-white text-gray-900'
                  } flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
                style={selection === 'enterprise' ? { background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' } : undefined}
              >
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{ENTERPRISE_PLAN.name}</h3>
                  <span className="text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium bg-gray-100 text-gray-600">
                    {ENTERPRISE_PLAN.tag}
                  </span>
                </div>
                <div className="text-left sm:text-right flex flex-col items-start sm:items-end justify-center">
                  <div className={`px-5 py-2 rounded-lg text-sm font-semibold border ${selection === 'enterprise' ? 'bg-white text-blue-600 border-white' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
                    <Link href="/contact-us">Custom pricing</Link>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                {selection === 'free' ? (
                  <button
                    onClick={() => setIsFreeTrialOpen(true)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-sm"
                  >
                    Start Free Trial
                  </button>
                ) : selection === 'enterprise' ? (
                  <Link
                    href="/contact-us"
                    className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-sm"
                  >
                    Contact Sales
                  </Link>
                ) : (
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-sm">
                    Choose Plan
                  </button>
                )}
              </div>
            </div>

            {/* Features Box */}
            <div className="w-full lg:w-[400px] bg-white border border-gray-200 rounded-[28px] p-9 shadow-sm flex flex-col min-h-[400px]">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Includes:</h3>
              <ul className="flex flex-col gap-4 flex-1">
                {(selection === 'free'
                  ? FREE_PLAN.features
                  : selection === 'enterprise'
                    ? ENTERPRISE_PLAN.features
                    : selectedPlan
                      ? INCLUDES_PANEL_KEYS.filter((key) => selectedPlan.features?.[key]).map((key) => FEATURE_LABELS[key] ?? key)
                      : []
                ).map((label, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-3 text-sm text-gray-600">
                    <span className="flex-1 mt-0.5">{label}</span>
                    <div className="shrink-0"><CheckIcon /></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Differentiation Table */}
          <div className="mt-16 max-w-5xl mx-auto overflow-x-auto pb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Compare Plans & Features</h2>
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold w-1/4">Feature</th>
                  <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center">{FREE_PLAN.name}</th>
                  {plans.map((plan) => (
                    <th key={plan._id} className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center">
                      {plan.plan_name}
                    </th>
                  ))}
                  <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center">{ENTERPRISE_PLAN.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 text-gray-900 font-bold">Users Allowed</td>
                  <td className="p-4 text-gray-600 text-center font-medium">{FREE_PLAN.usersLabel}</td>
                  {plans.map((plan) => (
                    <td key={plan._id} className="p-4 text-gray-600 text-center font-medium">{usersLabel(plan)}</td>
                  ))}
                  <td className="p-4 text-gray-600 text-center font-medium">{ENTERPRISE_PLAN.usersLabel}</td>
                </tr>

                {FEATURE_SECTIONS.map((section) => (
                  <Fragment key={section.title}>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td colSpan={plans.length + 3} className="p-4 font-bold text-gray-900 text-lg">{section.title}</td>
                    </tr>
                    {section.keys.map((key) => (
                      <tr key={key} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-gray-700 font-medium">{FEATURE_LABELS[key] ?? key}</td>
                        <td className="p-4 text-center"><CheckIcon /></td>
                        {plans.map((plan) => (
                          <td key={plan._id} className="p-4 text-center">
                            {plan.features?.[key] ? <CheckIcon /> : <CrossIcon />}
                          </td>
                        ))}
                        <td className="p-4 text-center"><CheckIcon /></td>
                      </tr>
                    ))}
                  </Fragment>
                ))}

                {/* Supported Integrations */}
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td colSpan={plans.length + 3} className="p-4 font-bold text-gray-900 text-lg">Supported Integrations</td>
                </tr>
                {INTEGRATIONS.map((integration) => (
                  <tr key={integration.key} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-700 font-medium">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 relative flex-shrink-0">
                          <Image src={integration.icon} alt={integration.name} fill className="object-contain" />
                        </div>
                        {integration.name}
                      </div>
                    </td>
                    <td className="p-4 text-center"><CrossIcon /></td>
                    {plans.map((plan) => (
                      <td key={plan._id} className="p-4 text-center text-sm font-semibold text-gray-600 whitespace-nowrap">
                        {plan.features?.[integration.key] ? '₹1,000' : <CrossIcon />}
                      </td>
                    ))}
                    <td className="p-4 text-center text-sm font-semibold text-gray-600 whitespace-nowrap">₹1,000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <FreeTrial isOpen={isFreeTrialOpen} onClose={() => setIsFreeTrialOpen(false)} />
    </section>
  );
}
