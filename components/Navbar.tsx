
import React from 'react';

export const Navbar = ({ cartCount, onCartClick }: { cartCount: number, onCartClick: () => void }) => {
  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav id="n" className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-neutral-100">
      <div className="cn h-16 f ic jb">
        <span className="text-2xl font-bold serif cap tracking-tighter cursor-pointer" onClick={() => scroll('h')}>
          L'Élégance
        </span>
        
        <div className="hidden md:f space-x-10 t-xs cap t-mut font-bold">
          <button onClick={() => scroll('s')} className="hover:text-black transition">Shop</button>
          <button onClick={() => scroll('s')} className="hover:text-black transition">New Arrivals</button>
          <button onClick={() => scroll('c')} className="hover:text-black transition">Contact</button>
        </div>

        <button onClick={onCartClick} className="rel p-2 hover:bg-neutral-100 rounded-full transition">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
          {cartCount > 0 && (
            <span className="abs top-0 right-0 bg-black text-white text-[9px] w-5 h-5 f ic jc rounded-full font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
