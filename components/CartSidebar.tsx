
import React from 'react';
import { CartItem } from '../types';

export const CartSidebar = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, onCheckout }: any) => {
  const sub = items.reduce((s: number, i: any) => s + (i.price * i.quantity), 0);
  if (!isOpen) return null;

  return (
    <div id="cs" className="fixed inset-0 z-[100]">
      <div className="abs inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="abs inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl f col">
        <div className="px-6 py-4 border-b f ic jb">
          <h2 className="text-lg font-bold cap tracking-widest">Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="f col ic jc h-full t-mut">
              <p className="t-sm cap tracking-widest">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((it: any) => (
                <div key={it.id} className="f space-x-4">
                  <img src={it.image} className="w-16 h-20 object-cover rounded" />
                  <div className="flex-grow f col jb">
                    <div>
                      <h4 className="t-sm font-medium">{it.name}</h4>
                      <p className="t-xs t-mut">${it.price}</p>
                    </div>
                    <div className="f ic jb">
                      <div className="f ic border rounded">
                        <button onClick={() => onUpdateQuantity(it.id, -1)} className="px-2 t-sm font-bold">-</button>
                        <span className="t-xs px-2 font-bold">{it.quantity}</span>
                        <button onClick={() => onUpdateQuantity(it.id, 1)} className="px-2 t-sm font-bold">+</button>
                      </div>
                      <button onClick={() => onRemove(it.id)} className="t-xs text-red-500 font-bold cap">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="p-6 border-t bg-neutral-50">
            <div className="f jb mb-4">
              <span className="t-mut cap t-xs font-bold tracking-widest">Subtotal</span>
              <span className="font-bold text-xl">${sub}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="btn w-full py-4 text-sm shadow-lg"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
