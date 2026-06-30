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
    tag: '30 Days Free Trial',
    features: [
      'Everything in Basic',
      'Access to standard templates & UI blocks',
      'Collaboration tools',
      'CMS collections',
      'Basic analytics'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    users: 20,
    price: 49,
    tag: 'Go to Plan',
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
    tag: 'All features unlocked',
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
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
          <span className="relative inline-block">
            <span className="text-black">Pay</span>
            <span className="absolute left-[-10%] right-[-10%] top-1/2 h-[2px] bg-red-500 transform -rotate-12"></span>
          </span>
          <span className="border-2 border-dashed border-gray-300 px-4 py-1 text-blue-500">Invest</span>
          <span>in</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Matters Most for Your Business
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our pricing is designed to deliver maximum value, giving your business
          access to powerful solutions without unnecessary costs
        </p>
        
        {/* Toggle */}
        <div className="mt-8 inline-flex bg-gray-50 rounded-lg p-1 border border-gray-100">
          <button 
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${billing === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${billing === 'yearly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setBilling('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="mb-12 max-w-4xl mx-auto">
        <div className="relative w-full h-2 bg-gray-100 rounded-full flex items-center">
          <div 
            className="absolute h-full bg-blue-500 rounded-full" 
            style={{ width: `${((users - 10) / 40) * 100}%` }}
          />
          <input 
            type="range" 
            min="10" 
            max="50" 
            step="1"
            value={users}
            onChange={handleSliderChange}
            className="absolute w-full opacity-0 cursor-pointer h-8"
          />
          <div 
            className="absolute w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md transform -translate-x-1/2 pointer-events-none"
            style={{ left: `${((users - 10) / 40) * 100}%` }}
          />
        </div>
        <div className="text-sm font-bold text-gray-900 mt-4" style={{ marginLeft: `calc(${((users - 10) / 40) * 100}% - 24px)` }}>
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
                className={`cursor-pointer rounded-2xl p-6 transition-all border ${
                  isSelected 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500 border-transparent shadow-lg text-white transform md:scale-[1.02]' 
                    : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm text-gray-900'
                } flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.tag && (
                    <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
                      isSelected ? 'bg-white/20 text-white font-medium' : 'bg-blue-50 text-blue-500 font-medium'
                    }`}>
                      {plan.tag}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  {typeof plan.price === 'number' ? (
                    <div className="text-3xl font-bold">
                      ${billing === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price}<span className={`text-base font-normal ${isSelected ? 'text-blue-50' : 'text-gray-500'}`}>/month</span>
                    </div>
                  ) : (
                    <Link href="#contact" className={`px-5 py-2 rounded-lg text-sm font-semibold border ${isSelected ? 'bg-white text-blue-600 border-white' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
                      {plan.price}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
          
          <div className="pt-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-sm">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Features Box */}
        <div className="w-full lg:w-96 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm h-fit">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Includes:</h3>
          <ul className="space-y-4">
            {selectedPlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                <div className="shrink-0 mt-0.5"><CheckIcon /></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
