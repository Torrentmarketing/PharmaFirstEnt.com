import { Truck, Package, ShieldCheck, TrendingUp, Activity, Boxes, Briefcase, Pill, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden text-center bg-slate-100 relative shadow-md">
             <img 
               src="https://images.unsplash.com/photo-1579154204601-01588f351e71?auto=format&fit=crop&q=80&w=1200" 
               alt="Modern Pharmaceutical Supply Chain" 
               className="w-full h-full object-cover"
             />
             <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 shadow-xl rounded-2xl border border-gray-100 text-pfe-dark hidden md:block">
                <span className="block text-5xl font-bold mb-1 text-pfe-light">15+</span>
                <span className="block text-xs uppercase tracking-widest font-bold text-gray-500">Years of Trust</span>
             </div>
          </div>
        </div>
        
        <div className="flex-1 lg:pl-10">
          <div className="mb-4">
             <span className="text-xs font-bold uppercase tracking-widest text-pfe-light mb-2 block">About Us</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-pfe-dark leading-tight">
            Leading the Way in Medical Supply Chain
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Pharma First Enterprises (PFE) is a premier pharmaceutical distribution company dedicated to bridging the gap between quality medicine manufacturers and trusted healthcare partners across Pakistan. We ensure that vital medicines reach every corner of the nation securely and efficiently.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4 p-4 bg-gray-50 border border-gray-100 rounded-lg">
              <div className="text-pfe-light shrink-0 mt-1"><TrendingUp size={24}/></div>
              <div>
                <h4 className="font-bold text-pfe-dark mb-1">Steady Growth</h4>
                <p className="text-gray-500 text-[11px]">Expanding our footprint to serve more communities every year.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 border border-gray-100 rounded-lg">
              <div className="text-pfe-light shrink-0 mt-1"><ShieldCheck size={24}/></div>
              <div>
                <h4 className="font-bold text-pfe-dark mb-1">Quality First</h4>
                <p className="text-gray-500 text-[11px]">Stringent temperature controls and compliance in handling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const servicesList = [
  { icon: Activity, title: 'Medicine Distribution', desc: 'Secure, temperature-controlled distribution of vital pharmaceutical products across regions.' },
  { icon: Briefcase, title: 'Franchise Support', desc: 'Partnering with local distributors with extensive business and marketing support setups.' },
  { icon: Truck, title: 'Logistics & Delivery', desc: 'A vast fleet ensuring timely, secure, and compliant deliveries nationwide.' },
  { icon: Boxes, title: 'Inventory Management', desc: 'Advanced tracking systems to manage stock levels and ensure continuous supply.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pfe-light mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pfe-dark">Comprehensive Supply Solutions</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesList.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white border border-gray-100 rounded-lg hover:border-pfe-light hover:shadow-md transition-all group flex flex-col"
            >
              <div className="text-pfe-light mb-4">
                <srv.icon size={28} />
              </div>
              <h3 className="font-bold text-pfe-dark mb-2">{srv.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const productCategories = [
  { name: 'Tablets', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800' },
  { name: 'Capsules', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800' },
  { name: 'Syrups', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800' },
  { name: 'Injections', image: 'https://images.unsplash.com/photo-1617952986518-80e227092147?auto=format&fit=crop&q=80&w=800' },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-pfe-light mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-pfe-dark">Product Categories</h2>
          </div>
          <button className="bg-[#2DAAE1] text-white px-6 py-2.5 rounded-full hover:bg-pfe-dark transition-colors shadow-lg shadow-blue-100 text-sm font-semibold uppercase tracking-wider">
            View Full Catalog
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              
              <div className="p-5 border-l-4 border-pfe-light flex items-center justify-between bg-white relative z-10">
                <h3 className="text-pfe-dark text-lg font-bold">{cat.name}</h3>
                <div className="w-8 h-8 rounded bg-blue-50 text-pfe-light flex items-center justify-center group-hover:bg-pfe-light group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const reasons = [
    { title: 'Quality Assurance', desc: 'Strict regulatory compliance & authentic sourcing.' },
    { title: 'Reliable Network', desc: 'Uninterrupted distribution chains covering 90% of local markets.' },
    { title: 'Business Support', desc: 'Dedicated partnership programs to help our distributors grow.' },
    { title: 'Timely Operations', desc: 'Optimized logistics guaranteeing delivery timelines.' }
  ];

  return (
    <section id="why-us" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#2DAAE1] mb-2 block">Values</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6">Why Partner With PFE?</h2>
          <p className="text-gray-500 text-sm mb-10 max-w-lg leading-relaxed">
            In an industry where precision and reliability are matters of life and health, we leave nothing to chance. Our extensive logistics framework and stringent quality protocols mean peace of mind for every partner.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
            {reasons.map((r, i) => (
              <div key={i} className="flex flex-col p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-[#2DAAE1] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#2DAAE1] mb-3"></div>
                <h4 className="text-sm font-bold text-[#0B3C5D] mb-1">{r.title}</h4>
                <p className="text-[11px] text-gray-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-full bg-[#2DAAE1]/10 absolute -inset-8 blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
            alt="Team Meeting/Operations" 
            className="w-full h-auto object-cover relative z-10 rounded-2xl shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
