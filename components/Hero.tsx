
import React from 'react';

export const Hero = () => (
  <section id="h" className="rel h-[75vh] w-full overflow-hidden f ic">
    <div className="abs inset-0">
      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600" className="w-full h-full object-cover" alt="Hero" />
      <div className="abs inset-0 bg-black/30" />
    </div>
    <div className="rel cn text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 serif leading-tight">
        Modern <span className="italic serif">Sophistication</span>
      </h1>
      <p className="t-sm md:text-lg mb-8 max-w-lg font-light leading-relaxed">
        Timeless pieces curated for the contemporary woman. Quality meets elegance.
      </p>
      <div className="f space-x-4">
        <button className="btn">Shop Now</button>
        <button className="btn btn-o">New Arrivals</button>
      </div>
    </div>
  </section>
);
