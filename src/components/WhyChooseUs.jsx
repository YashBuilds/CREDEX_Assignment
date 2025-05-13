import React from 'react';

function WhyChooseUs() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Reliable</h3>
            <p className="text-gray-700">We ensure secure, transparent transactions every time.</p>
          </div>
          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Fast</h3>
            <p className="text-gray-700">Lightning-fast processing and disbursal within hours.</p>
          </div>
          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Support</h3>
            <p className="text-gray-700">24/7 customer support to assist you anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
