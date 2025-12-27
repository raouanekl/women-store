
import React from 'react';

export const Footer = () => {
  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="f" className="bg-neutral-950 text-white py-20 px-4">
      <div className="cn g grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-bold serif cap mb-6">L'Élégance</h2>
          <p className="t-mut t-sm leading-relaxed max-w-xs">Elevating everyday luxury through conscious design and impeccable quality.</p>
        </div>
        
        <div>
          <h3 className="t-xs font-bold cap mb-6 text-neutral-400">Navigation</h3>
          <ul className="space-y-3 t-xs cap font-bold tracking-widest">
            <li><button onClick={() => scroll('h')} className="hover:text-neutral-400 transition">Home</button></li>
            <li><button onClick={() => scroll('s')} className="hover:text-neutral-400 transition">Collection</button></li>
            <li><button onClick={() => scroll('c')} className="hover:text-neutral-400 transition">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h3 className="t-xs font-bold cap mb-6 text-neutral-400">Contact</h3>
          <p className="t-xs t-mut leading-loose">
            raouanekl<br/>
            rorokihal@gmail.com<br/>
            123 Boutique St, Paris
          </p>
        </div>

        <div>
          <h3 className="t-xs font-bold cap mb-6 text-neutral-400">Newsletter</h3>
          <p className="t-xs t-mut mb-4">Subscribe for exclusive collection drops.</p>
          <div className="f border-b border-neutral-800 pb-2">
            <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent t-[10px] cap w-full outline-none font-bold" />
            <button className="t-xs cap font-bold ml-2 hover:text-neutral-400 transition">Join</button>
          </div>
        </div>
      </div>
      
      <div className="cn mt-20 pt-8 border-t border-neutral-900 f col md:f-row ic jb t-[10px] cap t-mut font-bold">
        <p>© 2024 L'Élégance Boutique. All Rights Reserved.</p>
        <div className="f space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
