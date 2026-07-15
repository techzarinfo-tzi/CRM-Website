"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FreeTrial from "../home/FreeTrial";

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

const plans = [
  {
    id: 'free',
    name: 'Free Trial',
    usersText: 'All users',
    sliderValue: 0,
    price: 'Free',
    tag: '14 Days',
    features: [
      '14-day full access',
      'No card required',
      'Leads management',
      'Deals management',
      'Drag-and-drop pipeline view',
      'Smart proposals',
      'Digital invoicing',
      'Meetings scheduler',
      'Team analytics',
      'Users & roles (RBAC)',
      'Email chat',
      'Deal analysis (pricing recommendation)',
      'Target & task management'
    ]
  },
  {
    id: 'launch',
    name: 'Launch',
    usersText: 'Up to 5 users',
    sliderValue: 5,
    price: { '6_months': 3999, 'yearly': 5999 },
    tag: 'Small Teams',
    features: [
      'Leads management',
      'Deals management',
      'Drag-and-drop pipeline view',
      'Smart proposals',
      'Digital invoicing',
      'Meetings scheduler',
      'Team analytics',
      'Users & roles (RBAC)',
      'Email chat',
      'Deal analysis (pricing recommendation)',
      'Target & task management'
    ]
  },
  {
    id: 'cruise',
    name: 'Cruise',
    usersText: '5–10 users',
    sliderValue: 10,
    price: { 'yearly': 11999 },
    tag: 'Growing Teams',
    features: [
      'All 11 Launch features',
      'Loss analysis (lost deal analytics)',
      'AI internal assistant (CRM search bot)',
      'Internal workspace chat',
      'Predictive client lifetime value (CLTV)',
      'Streak leaderboard'
    ]
  },
  {
    id: 'accelerate',
    name: 'Accelerate',
    usersText: 'Up to 20 users',
    sliderValue: 20,
    price: { 'yearly': 21999 },
    tag: 'Scaling Teams',
    features: [
      'All 11 Launch features',
      'Loss analysis (lost deal analytics)',
      'AI internal assistant (CRM search bot)',
      'Internal workspace chat',
      'Predictive client lifetime value (CLTV)',
      'Streak leaderboard',
      'Up to 20 users capacity'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    usersText: '20+ users',
    sliderValue: 50,
    price: 'Custom pricing',
    tag: 'Unlimited',
    features: [
      'Identical feature set to Cruise/Accelerate',
      'White-label option',
      'Custom user limits'
    ]
  }
];

export function PricingSection() {
  const [sliderVal, setSliderVal] = useState(5);
  const [billing, setBilling] = useState<'6_months' | 'yearly'>('yearly');
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

  const selectedPlan = billing === '6_months'
    ? (plans.find(p => p.id === 'launch')!)
    : (plans.find(p => p.sliderValue === sliderVal) || plans[1]);

  const displayedPlans = billing === '6_months'
    ? plans.filter(p => p.id === 'launch')
    : plans;

  const planIndexMap: Record<number, number> = { 0: 0, 5: 1, 10: 2, 20: 3, 50: 4 };
  const indexToPlanMap: Record<number, number> = { 0: 0, 1: 5, 2: 10, 3: 20, 4: 50 };
  const currentSliderIndex = planIndexMap[sliderVal] ?? 1;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setSliderVal(indexToPlanMap[val] ?? 5);
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

      {/* Slider */}
      <div className="mb-6 mx-auto px-4" style={{ width: '100%', maxWidth: '1211.5px' }}>
        <div className="relative w-full bg-gray-100 rounded-full flex items-center" style={{ height: '13.166px' }}>
          <div
            className="absolute h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentSliderIndex / 4) * 100}%` }}
          />
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={currentSliderIndex}
            onChange={handleSliderChange}
            className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div
            className="absolute w-6 h-6 bg-white border-[3px] border-blue-500 rounded-full shadow-md transform -translate-x-1/2 pointer-events-none z-20 transition-all duration-300 ease-in-out"
            style={{ left: `${(currentSliderIndex / 4) * 100}%` }}
          />
        </div>
        <div className="text-sm font-bold text-gray-900 mt-4 whitespace-nowrap" style={{ marginLeft: `calc(${(currentSliderIndex / 4) * 100}% - 24px)` }}>
          {selectedPlan.usersText}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto mb-20">
        {/* Plans List */}
        <div className="flex-1 space-y-4">
          {billing === '6_months' && sliderVal > 5 ? (
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-4">
              <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-lg font-bold text-blue-900">Growing Team?</h3>
              <p className="text-blue-700 text-sm sm:text-base max-w-md">
                For more than 5 users, switch to our yearly plan to unlock advanced team features and better pricing.
              </p>
              <button
                type="button"
                onClick={() => setBilling('yearly')}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Switch to Yearly Billing
              </button>
            </div>
          ) : (
            <>
              {displayedPlans.map((plan) => {
                const isSelected = selectedPlan.id === plan.id;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSliderVal(plan.sliderValue)}
                    className={`cursor-pointer rounded-4xl p-5 sm:p-6 transition-all border ${isSelected
                      ? 'border-transparent shadow-lg text-white transform md:scale-[1.02]'
                      : plan.id === 'enterprise'
                        ? 'border-transparent bg-transparent hover:border-blue-300 hover:bg-white text-gray-900'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm text-gray-900'
                      } flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
                    style={isSelected ? { background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' } : undefined}
                  >
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <h3 className="text-lg sm:text-xl font-semibold">{plan.name}</h3>
                      {plan.tag && (
                        <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium ${plan.id === 'free'
                          ? (isSelected ? 'bg-white text-[#7c5ef2]' : 'bg-[#f0f5ff] text-[#7c5ef2]')
                          : plan.id === 'launch'
                            ? 'bg-[#e0f2fe] text-[#0ea5e9]'
                            : plan.id === 'cruise'
                              ? 'bg-[#fae8ff] text-[#c026d3]'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                          {plan.tag}
                        </span>
                      )}
                    </div>
                    <div className="text-left sm:text-right flex flex-col items-start sm:items-end justify-center">
                      {typeof plan.price === 'object' ? (
                        <>
                          <div className="text-2xl sm:text-3xl font-medium">
                            {billing === '6_months' && plan.price['6_months'] ? (
                              <>₹{plan.price['6_months'].toLocaleString()}<span className={`font-normal text-lg sm:text-2xl ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>/6mo</span></>
                            ) : (
                              <>₹{plan.price['yearly'].toLocaleString()}<span className={`font-normal text-lg sm:text-2xl ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>/yr</span></>
                            )}
                          </div>
                          {plan.id === 'launch' && (
                            <div className={`text-sm mt-0.5 ${isSelected ? 'text-white/90' : 'text-gray-500'}`}>
                              {billing === 'yearly' ? 'or ₹3,999 for 6 months' : 'or ₹5,999 per year'}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className={`px-5 py-2 rounded-lg text-sm font-semibold border ${isSelected ? 'bg-white text-blue-600 border-white' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
                          {plan.price === 'Custom pricing' ? (
                            <Link href="/contact-us">{plan.price}</Link>
                          ) : plan.price === 'Free' ? (
                            <button 
                              type="button" 
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsFreeTrialOpen(true);
                              }}
                            >
                              {plan.price}
                            </button>
                          ) : (
                            plan.price
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="pt-4">
                <button 
                  onClick={() => {
                    if (selectedPlan.id === 'free') {
                      setIsFreeTrialOpen(true);
                    }
                  }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-sm"
                >
                  {selectedPlan.id === 'free' ? 'Start Free Trial' : 'Choose Plan'}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Features Box */}
        <div className="w-full lg:w-[400px] bg-white border border-gray-200 rounded-[28px] p-9 shadow-sm flex flex-col min-h-[400px]">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Includes:</h3>
          <ul className="flex flex-col gap-4 flex-1">
            {selectedPlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start justify-between gap-3 text-sm text-gray-600">
                <span className="flex-1 mt-0.5">{feature}</span>
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
              <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center w-[15%]">Free Trial</th>
              <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center w-[15%]">Launch</th>
              <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center w-[15%]">Cruise</th>
              <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center w-[15%]">Accelerate</th>
              <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold text-center w-[15%]">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-4 text-gray-900 font-bold">Users Allowed</td>
              <td className="p-4 text-gray-600 text-center font-medium">All users</td>
              <td className="p-4 text-gray-600 text-center font-medium">Up to 5</td>
              <td className="p-4 text-gray-600 text-center font-medium">5–10</td>
              <td className="p-4 text-gray-600 text-center font-medium">Up to 20</td>
              <td className="p-4 text-gray-600 text-center font-medium">20+</td>
            </tr>

            {/* Basic Features */}
            <tr className="bg-gray-50 border-b border-gray-200">
              <td colSpan={6} className="p-4 font-bold text-gray-900 text-lg">Basic Features</td>
            </tr>
            {[
              ['Leads Management', true, true, true, true, true],
              ['Deals Management', true, true, true, true, true],
              ['Drag-and-Drop Pipeline View', true, true, true, true, true],
              ['Smart Proposals', true, true, true, true, true],
              ['Digital Invoicing', true, true, true, true, true],
              ['Meetings Scheduler', true, true, true, true, true],
              ['Team Analytics', true, true, true, true, true],
              ['Users & Roles (RBAC)', true, true, true, true, true]
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-700 font-medium">{row[0]}</td>
                <td className="p-4 text-center">{row[1] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[2] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[3] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[4] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[5] ? <CheckIcon /> : <CrossIcon />}</td>
              </tr>
            ))}

            {/* Unique & Premium Features */}
            <tr className="bg-gray-50 border-b border-gray-200">
              <td colSpan={6} className="p-4 font-bold text-gray-900 text-lg">Unique & Premium Features</td>
            </tr>
            {[
              ['Email Chat', true, true, true, true, true],
              ['Deal Analysis (Pricing Recommendation)', true, true, true, true, true],
              ['Target & Task Management', true, true, true, true, true],
              ['Loss Analysis (Lost Deal Analytics)', false, false, true, true, true],
              ['AI Internal Assistant (CRM Search Bot)', false, false, true, true, true],
              ['Internal Workspace Chat', false, false, true, true, true],
              ['Predictive Client Lifetime Value (CLTV)', false, false, true, true, true],
              ['Streak leaderboard', false, false, true, true, true],
              ['White-label option', false, false, false, false, true],
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-700 font-medium">{row[0]}</td>
                <td className="p-4 text-center">{row[1] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[2] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[3] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[4] ? <CheckIcon /> : <CrossIcon />}</td>
                <td className="p-4 text-center">{row[5] ? <CheckIcon /> : <CrossIcon />}</td>
              </tr>
            ))}

            {/* Supported Integrations */}
            <tr className="bg-gray-50 border-b border-gray-200">
              <td colSpan={6} className="p-4 font-bold text-gray-900 text-lg">Supported Integrations</td>
            </tr>
            {[
              { name: 'Facebook & Instagram Lead Ads', icon: '/images/pricing/facebook logo.svg' },
              { name: 'LinkedIn Lead Gen Campaigns', icon: '/images/pricing/linkedin logo.svg' },
              { name: 'Justdial Lead Webhook', icon: '/images/pricing/justdial-seeklogo 1.svg' },
              { name: 'IndiaMART Leads Pull API', icon: '/images/pricing/IndiaMART Symbol PNG 1.svg' },
              { name: '99acres Webhook Integration', icon: '/images/pricing/99acres.svg' },
              { name: 'Sulekha Lead Webhook', icon: '/images/pricing/Sulekha Icon 1.svg' },
              { name: 'Google Meet Integration', icon: '/images/pricing/google-meet.svg' }
            ].map((integration, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-700 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <Image src={integration.icon} alt={integration.name} fill className="object-contain" />
                    </div>
                    {integration.name}
                  </div>
                </td>
                <td className="p-4 text-center"><CrossIcon /></td>
                <td className="p-4 text-center text-sm font-semibold text-gray-600 whitespace-nowrap">₹1,000</td>
                <td className="p-4 text-center text-sm font-semibold text-gray-600 whitespace-nowrap">₹1,000</td>
                <td className="p-4 text-center text-sm font-semibold text-gray-600 whitespace-nowrap">₹1,000</td>
                <td className="p-4 text-center text-sm font-semibold text-gray-600 whitespace-nowrap">₹1,000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FreeTrial isOpen={isFreeTrialOpen} onClose={() => setIsFreeTrialOpen(false)} />
    </section>
  );
}

