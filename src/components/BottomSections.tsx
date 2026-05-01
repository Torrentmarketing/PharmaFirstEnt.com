import { motion } from 'motion/react';
import { MessageSquareQuote, MapPin, Mail, Phone, ArrowUpRight, Plus, Minus, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "PFE's logistics network transformed our stock availability. Their temperature-controlled deliveries give us absolute peace of mind.",
    name: "Dr. Ahmed Khan",
    role: "Local Pharmacy Owner"
  },
  {
    quote: "Partnering with PharmaFirst as a regional distributor has been incredibly smooth. Their support resources are unparalleled in the market.",
    name: "Tariq Mahmood",
    role: "Medical Representative"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pfe-light mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pfe-dark mb-4">Trusted by the Healthcare Community</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-pfe-dark rounded-2xl text-white shadow-lg"
            >
              <div className="text-pfe-light mb-4"><MessageSquareQuote size={28} /></div>
              <p className="italic text-base md:text-lg leading-relaxed mb-6 font-light">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pfe-light shrink-0"></div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What regions do you cover for medicine distribution?", a: "We have an extensive network covering major metropolitan areas and expanding into rural sectors across Pakistan, ensuring national coverage." },
  { q: "How do you ensure the quality of temperature-sensitive drugs?", a: "We utilize dedicated cold-chain logistics, keeping strict temperature logs from warehouse to final delivery point in compliance with global standards." },
  { q: "Can I become a franchise partner?", a: "Yes, we actively seek driven distributors. We provide complete backend support, inventory management tools, and training for our partners." },
  { q: "What types of pharmaceutical products do you handle?", a: "Our current portfolio heavily features general medicines including Tablets, Capsules, Syrups, and a specialized division for Injections and surgical disposables." }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-pfe-dark mb-2">Common Queries</h3>
          <p className="text-sm text-gray-500">Everything you need to know about our services.</p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border-b border-gray-200 last:border-0"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-bold text-sm md:text-base text-pfe-dark pr-4">
                  Q: {faq.q}
                </span>
                <span className="shrink-0 text-pfe-light">
                  {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {openIdx === idx && (
                <div className="pb-5 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm flex flex-col gap-6">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-pfe-light mb-2 block">Reach Out</span>
            <h2 className="text-3xl font-bold text-pfe-dark">Let's build a healthier future together.</h2>
          </div>
          
          <div className="flex flex-col gap-6 mt-auto">
            <a 
              href="https://wa.me/923338111992" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 p-5 bg-[#25D366]/10 text-[#075E54] rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
            >
              <Phone size={28} className="shrink-0" />
              <div className="text-base">
                <div className="font-bold uppercase tracking-wider text-[11px] mb-1">Contact on WhatsApp</div>
                <div className="font-bold">+92 333 8111992</div>
              </div>
            </a>

            <div className="flex items-start gap-5 p-5 bg-pfe-dark/5 rounded-xl border border-pfe-dark/10">
              <MapPin size={24} className="text-pfe-dark shrink-0" />
              <div className="text-sm md:text-base text-gray-600">
                <div className="font-bold text-pfe-dark mb-1">Headquarters</div>
                123 Health Avenue, Business District<br/>Karachi, Pakistan
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 bg-pfe-dark/5 rounded-xl border border-pfe-dark/10">
              <Mail size={24} className="text-pfe-dark shrink-0" />
              <div className="text-sm md:text-base text-gray-600">
                <div className="font-bold text-pfe-dark mb-1">Email</div>
                info@pharmafirst.com.pk<br/>partners@pharmafirst.com.pk
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-pfe-dark mb-8">Send us a message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">First Name</label>
                <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-pfe-light focus:ring-1 focus:ring-pfe-light transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Last Name</label>
                <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-pfe-light focus:ring-1 focus:ring-pfe-light transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
              <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-pfe-light focus:ring-1 focus:ring-pfe-light transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-pfe-light focus:ring-1 focus:ring-pfe-light transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-pfe-light text-white rounded-xl px-6 py-4 font-bold uppercase tracking-wider text-sm hover:bg-pfe-dark transition-colors shadow-lg shadow-blue-100 flex items-center justify-center gap-2 mt-4">
              Submit Request <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200 px-6 flex flex-col md:flex-row items-center justify-between text-[11px] uppercase tracking-widest text-gray-400 font-bold shrink-0">
      <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} PharmaFirstEnterprises. All Rights Reserved.</div>
      
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <a href="https://www.facebook.com/profile.php?id=61583585574792" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/ente.rprises65/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors">
          <Instagram size={20} />
        </a>
      </div>

      <div className="flex gap-6">
        <a href="#" className="hover:text-pfe-light transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-pfe-light transition-colors">Certifications</a>
        <a href="#" className="hover:text-pfe-light transition-colors">Careers</a>
      </div>
    </footer>
  );
}
