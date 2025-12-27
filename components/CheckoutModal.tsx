
import React, { useState } from 'react';
import { CartItem } from '../types';

export const CheckoutModal = ({ isOpen, onClose, items, onComplete }: any) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', card: '', expiry: '', cvc: '', method: 'card' });
  const total = items.reduce((s: number, i: any) => s + (i.price * i.quantity), 0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      onComplete();
      setStep(1);
    }
  };

  return (
    <div className="fixed inset-0 z-[150] f ic jc p-4">
      <div className="abs inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="rel bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl g md:grid-cols-2">
        {/* Left: Form */}
        <div className="p-8 md:p-12">
          <div className="f ic jb mb-8">
            <h2 className="text-2xl font-bold serif">Checkout</h2>
            <div className="t-[10px] cap t-mut font-bold">Step {step} of 2</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <div className="space-y-4">
                <h3 className="t-xs font-bold cap tracking-widest text-neutral-400">Shipping Details</h3>
                <input required className="inp" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <input required type="email" className="inp" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <input required className="inp" placeholder="Shipping Address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
                <div className="g grid-cols-2 gap-4">
                  <input required className="inp" placeholder="City" value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
                  <input required className="inp" placeholder="Zip Code" />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="t-xs font-bold cap tracking-widest text-neutral-400">Payment Method</h3>
                <div className="f space-x-4 mb-4">
                  <button type="button" onClick={() => setForm({...form, method: 'card'})} className={`flex-1 p-4 border t-xs cap font-bold ${form.method === 'card' ? 'border-black bg-neutral-50' : 'border-neutral-100'}`}>Card</button>
                  <button type="button" onClick={() => setForm({...form, method: 'paypal'})} className={`flex-1 p-4 border t-xs cap font-bold ${form.method === 'paypal' ? 'border-black bg-neutral-50' : 'border-neutral-100'}`}>PayPal</button>
                </div>
                {form.method === 'card' ? (
                  <div className="space-y-4">
                    <input required className="inp" placeholder="Card Number" value={form.card} onChange={e => setForm({...form, card: e.target.value})} />
                    <div className="g grid-cols-2 gap-4">
                      <input required className="inp" placeholder="MM/YY" value={form.expiry} onChange={e => setForm({...form, expiry: e.target.value})} />
                      <input required className="inp" placeholder="CVC" value={form.cvc} onChange={e => setForm({...form, cvc: e.target.value})} />
                    </div>
                  </div>
                ) : (
                  <div className="p-8 border border-dashed text-center t-sm t-mut">
                    Redirecting to PayPal...
                  </div>
                )}
              </div>
            )}

            <div className="f space-x-4 pt-4">
              {step > 1 && <button type="button" onClick={() => setStep(1)} className="btn bg-white !text-black flex-1 border-neutral-200">Back</button>}
              <button type="submit" className="btn flex-1">
                {step === 1 ? 'Next: Payment' : 'Complete Purchase'}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-neutral-50 p-8 md:p-12 border-l border-neutral-100">
          <h3 className="t-xs font-bold cap tracking-widest text-neutral-400 mb-8">Order Summary</h3>
          <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
            {items.map((it: any) => (
              <div key={it.id} className="f jb ic">
                <div className="f ic space-x-4">
                  <div className="w-12 h-16 bg-white overflow-hidden rounded">
                    <img src={it.image} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="t-sm font-medium">{it.name}</p>
                    <p className="t-xs t-mut">Qty: {it.quantity}</p>
                  </div>
                </div>
                <p className="t-sm font-bold">${it.price * it.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200 space-y-2">
            <div className="f jb t-sm t-mut">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="f jb text-xl font-bold pt-4">
              <span className="serif">Total</span>
              <span>${total}</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white border border-neutral-100 rounded t-[10px] t-mut cap leading-relaxed">
            Secure checkout powered by Stripe. Your data is encrypted and safe.
          </div>
        </div>

        <button onClick={onClose} className="abs top-4 right-4 p-2 hover:bg-neutral-100 rounded-full">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  );
};
