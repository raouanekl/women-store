
import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { CartSidebar } from './components/CartSidebar';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { products } from './data';
import { Product, CartItem, Category } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkOpen, setCheckOpen] = useState(false);
  const [cat, setCat] = useState<Category>('All');
  const [msg, setMsg] = useState({ name: '', email: '', text: '' });
  const [sent, setSent] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) try { setCart(JSON.parse(saved)); } catch (e) {}
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const add = (p: Product) => {
    setCart(curr => {
      const ex = curr.find(i => i.id === p.id);
      return ex ? curr.map(i => i.id === p.id ? {...i, quantity: i.quantity + 1} : i) : [...curr, {...p, quantity: 1}];
    });
    setCartOpen(true);
  };

  const upd = (id: number, d: number) => {
    setCart(curr => curr.map(i => i.id === id ? {...i, quantity: Math.max(1, i.quantity + d)} : i));
  };

  const rem = (id: number) => setCart(curr => curr.filter(i => i.id !== id));

  const handleComplete = () => {
    setSuccess(true);
    setCart([]);
    setCheckOpen(false);
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setMsg({ name: '', email: '', text: '' }); }, 3000);
  };

  const filtered = useMemo(() => cat === 'All' ? products : products.filter(p => p.category === cat), [cat]);
  const count = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="min-h-screen f col">
      {success && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] bg-black text-white px-8 py-4 rounded-full shadow-2xl t-sm cap font-bold animate-bounce">
          Order Placed Successfully!
        </div>
      )}

      <Navbar cartCount={count} onCartClick={() => setCartOpen(true)} />
      
      <main className="flex-grow pt-16">
        <Hero />

        <div id="s" className="cn py-16">
          <div className="f col md:f-row ic jb mb-10">
            <h2 className="text-4xl font-bold serif">The Collection</h2>
            <div className="f space-x-2 overflow-x-auto pb-2 no-scrollbar">
              {(['All', 'Dresses', 'Tops', 'Accessories', 'Outerwear'] as Category[]).map(c => (
                <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 rounded-full t-xs cap font-bold transition ${cat === c ? 'bg-black text-white shadow-lg' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <ProductList products={filtered} onAddToCart={add} />
        </div>

        <div id="c" className="bg-neutral-50 py-20 border-y">
          <div className="cn max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold serif mb-4">Get In Touch</h2>
              <p className="t-mut t-sm">Questions or collaborations? We'd love to hear from you.</p>
            </div>
            
            <form onSubmit={handleContact} className="f col space-y-4">
              <div className="g grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  required
                  type="text" 
                  placeholder="Name" 
                  className="inp"
                  value={msg.name}
                  onChange={e => setMsg({...msg, name: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email" 
                  className="inp"
                  value={msg.email}
                  onChange={e => setMsg({...msg, email: e.target.value})}
                />
              </div>
              <textarea 
                required
                rows={4} 
                placeholder="How can we help?" 
                className="inp resize-none"
                value={msg.text}
                onChange={e => setMsg({...msg, text: e.target.value})}
              />
              <button type="submit" className="btn py-4 shadow-xl">
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      
      <CartSidebar 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={cart} 
        onRemove={rem} 
        onUpdateQuantity={upd} 
        onCheckout={() => { setCartOpen(false); setCheckOpen(true); }}
      />

      <CheckoutModal 
        isOpen={checkOpen} 
        onClose={() => setCheckOpen(false)} 
        items={cart}
        onComplete={handleComplete}
      />
    </div>
  );
}
