import React from 'react';

function Testimonials() {
  return (
    <section className="bg-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border rounded-lg shadow">
            <p className="text-gray-700 mb-4">“Excellent service and quick approvals!”</p>
            <p className="font-semibold text-indigo-600">- Rahul Verma</p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow">
            <p className="text-gray-700 mb-4">“Professional and reliable platform.”</p>
            <p className="font-semibold text-indigo-600">- Sneha Kapoor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
