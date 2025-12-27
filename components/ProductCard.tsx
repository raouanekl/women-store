
import React from 'react';
import { Product } from '../types';

export const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: () => void }) => (
  <div className="group f col h-full bg-white border border-transparent hover:border-neutral-100 p-2 transition">
    <div className="rel aspect-[3/4] overflow-hidden mb-4 bg-neutral-100">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
      
      {/* Overlay - visible on hover for desktop, but good to have a simple way to add */}
      <div className="abs inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300" />
      
      <div className="abs inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 md:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <button onClick={onAddToCart} className="btn w-full shadow-2xl py-3 border-none">
          Add to Cart
        </button>
      </div>
      
      {/* Mobile Add to Cart Button */}
      <div className="md:hidden abs bottom-2 right-2">
        <button onClick={onAddToCart} className="bg-white/90 p-2 rounded-full shadow-lg backdrop-blur">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>
    
    <div className="f col flex-grow px-1">
      <p className="text-[9px] cap t-mut mb-1 font-bold tracking-[0.2em]">{product.category}</p>
      <h3 className="t-sm font-medium text-neutral-800">{product.name}</h3>
      <p className="mt-1 text-base font-bold text-black">${product.price}</p>
    </div>
  </div>
);
