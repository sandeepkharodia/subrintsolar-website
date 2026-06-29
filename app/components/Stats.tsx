"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-4xl font-bold text-orange-400">
            <CountUp end={500} duration={3} />+
          </h3>
          <p>Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-400">
            <CountUp end={12} duration={3} /> MW+
          </h3>
          <p>Installed Capacity</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-400">
            <CountUp end={100} duration={3} />%
          </h3>
          <p>Customer Satisfaction</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-400">
            25
          </h3>
          <p>Years Panel Warranty</p>
        </div>

      </div>
    </section>
  );
}