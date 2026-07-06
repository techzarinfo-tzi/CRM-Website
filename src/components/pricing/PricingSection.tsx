"use client";

import { useState } from "react";
import Link from "next/link";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    users: 10,
    price: 39,
    tag: 'Startups',
    features: [
      'Everything in Basic',
      'Access to standard templates & UI blocks',
      'Collaboration tools',
      'CMS collections',
      'Basic analytics',
      'Standard integrations',
      'Priority email support'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    users: 20,
    price: 49,
    tag: 'Small & Medium Businesses',
    features: [
      'Everything in Basic',
      'Access to standard templates & UI blocks',
      'Collaboration tools',
      'CMS collections',
      'Basic analytics',
      'Standard integrations',
      'Priority email support'
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced',
    users: 30,
    price: 79,
    tag: 'Large Enterprises',
    features: [
      'Everything in Standard',
      'Access to advanced templates',
      'Advanced collaboration tools',
      'Advanced CMS collections',
      'Advanced analytics',
      'Custom integrations',
      '24/7 priority support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    users: 50,
    price: 'Contact us',
    tag: '',
    features: [
      'Everything in Advanced',
      'Dedicated account manager',
      'Custom SLA',
      'Custom onboarding',
      'Advanced security',
      'White-labeling',
      'Unlimited everything'
    ]
  }
];

export function PricingSection() {
  const [users, setUsers] = useState(10);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const selectedPlan = plans.find(p => p.users === users) || plans[0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    // snap to nearest allowed value
    let nearest = 10;
    if (val < 15) nearest = 10;
    else if (val < 25) nearest = 20;
    else if (val < 40) nearest = 30;
    else nearest = 50;
    setUsers(nearest);
  };

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto bg-white min-h-screen">
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
              {/* Horizontal lines */}
              <line x1="0" y1="8" x2="313" y2="8" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="12 12" />
              <line x1="0" y1="114" x2="313" y2="114" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="12 12" />
              {/* Vertical lines */}
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
            className={`px-8 py-2.5 rounded-lg text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-white shadow text-[#1e1b4b]' : 'text-[#3730a3] hover:text-[#1e1b4b]'}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
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
            style={{ width: `${((users - 10) / 40) * 100}%` }}
          />
          <input
            type="range"
            min="10"
            max="50"
            step="1"
            value={users}
            onChange={handleSliderChange}
            className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div
            className="absolute w-6 h-6 bg-white border-[3px] border-blue-500 rounded-full shadow-md transform -translate-x-1/2 pointer-events-none z-20 transition-all duration-300 ease-in-out"
            style={{ left: `${((users - 10) / 40) * 100}%` }}
          />
        </div>
        <div className="text-sm font-bold text-gray-900 mt-4 whitespace-nowrap" style={{ marginLeft: `calc(${((users - 10) / 40) * 100}% - 24px)` }}>
          {users >= 50 ? '50+ users' : `${users} users`}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
        {/* Plans List */}
        <div className="flex-1 space-y-4">
          {plans.map((plan) => {
            const isSelected = selectedPlan.id === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setUsers(plan.users)}
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
                    <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium ${plan.id === 'basic'
                      ? (isSelected ? 'bg-white text-[#7c5ef2]' : 'bg-[#f0f5ff] text-[#7c5ef2]')
                      : plan.id === 'standard'
                        ? 'bg-[#e0f2fe] text-[#0ea5e9]'
                        : plan.id === 'advanced'
                          ? 'bg-[#fae8ff] text-[#c026d3]'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                      {plan.tag}
                    </span>
                  )}
                </div>
                <div className="text-left sm:text-right">
                  {typeof plan.price === 'number' ? (
                    <div className="text-2xl sm:text-3xl font-medium">
                      ${billing === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price}<span className={`font-normal text-lg sm:text-2xl ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>/mo</span>
                    </div>
                  ) : (
                    <Link href="/contact" className={`px-5 py-2 rounded-lg text-sm font-semibold border ${isSelected ? 'bg-white text-blue-600 border-white' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
                      {plan.price}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}

          <div className="pt-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-sm">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Features Box */}
        <div className="w-full lg:w-[400px] bg-white border border-gray-200 rounded-[28px] p-9 shadow-sm flex flex-col">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Includes:</h3>
          <ul className="flex flex-col justify-between flex-1 h-full">
            {selectedPlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center justify-between gap-3 text-sm text-gray-600">
                <span className="flex-1">{feature}</span>
                <div className="shrink-0"><CheckIcon /></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
