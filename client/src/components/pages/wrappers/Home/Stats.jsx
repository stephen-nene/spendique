import React from 'react';

export default function Stats() {
  return (
    <div className="bg- gray-100 px-4 py-12 font-sans">
      <div className="max-w-4xl max-sm:max-w-sm mx-auto">
        <h2 className="text-gray-800 text-4xl max-sm:text-2xl font-extrabold mb-8">
          Why Choose Our Spending Habit Tracker?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Trusted by thousands, our tracker offers powerful insights to help you manage your spending effectively. See why users love us:
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border px-7 py-8">
            <p className="text-gray-400 text-base font-semibold mb-1">Money Saved by Users</p>
            <h3 className="text-blue-600 text-3xl font-extrabold">$5.4M+</h3>
          </div>
          <div className="bg-white rounded-xl border px-7 py-8">
            <p className="text-gray-400 text-base font-semibold mb-1">Active Monthly Users</p>
            <h3 className="text-blue-600 text-3xl font-extrabold">80K+</h3>
          </div>
          <div className="bg-white rounded-xl border px-7 py-8">
            <p className="text-gray-400 text-base font-semibold mb-1">Daily Transactions Logged</p>
            <h3 className="text-blue-600 text-3xl font-extrabold">100K+</h3>
          </div>
          <div className="bg-white rounded-xl border px-7 py-8">
            <p className="text-gray-400 text-base font-semibold mb-1">Reliability</p>
            <h3 className="text-blue-600 text-3xl font-extrabold">99.9% Uptime</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
