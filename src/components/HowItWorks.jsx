import React from 'react';

function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-lg shadow text-center">
          <h3 className="font-semibold text-xl mb-2">Step 1</h3>
          <p>Apply for your preferred service online.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow text-center">
          <h3 className="font-semibold text-xl mb-2">Step 2</h3>
          <p>Get approval and personalized offers.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow text-center">
          <h3 className="font-semibold text-xl mb-2">Step 3</h3>
          <p>Receive funds or service quickly and securely.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
