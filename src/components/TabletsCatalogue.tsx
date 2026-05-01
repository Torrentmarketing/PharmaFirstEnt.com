import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabletImages = [
  { src: '/images/MAKE_IT_BRIGHT_202604151133.jpeg', brand: 'Methimor' },
  { src: '/images/Product_catalog_image_202604151121.jpeg', brand: 'Ibumor' },
  { src: '/images/Product_catalog_image_202604151132.jpeg', brand: 'Morid' },
  { src: '/images/Product_catalog_image_202604151133.jpeg', brand: 'Levo-M' },
  { src: '/images/Use_the_provided_202604151121 (10).jpeg', brand: 'Gasidon' },
  { src: '/images/Use_the_provided_202604151121 (2).jpeg', brand: 'Safkam' },
  { src: '/images/Use_the_provided_202604151121 (3).jpeg', brand: 'RINGACIP' },
  { src: '/images/Use_the_provided_202604151121 (4).jpeg', brand: 'TRIOMOR' },
  { src: '/images/Use_the_provided_202604151121 (5).jpeg', brand: 'Montemore' },
];

export default function TabletsCatalogue() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-pfe-light hover:text-pfe-dark transition-colors mb-8 font-semibold uppercase tracking-wider text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-pfe-light mb-2 block">Catalogue</span>
          <h1 className="text-4xl md:text-5xl font-bold text-pfe-dark mb-4">Tablets Range</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Explore our comprehensive range of high-quality tablet formulations. Each product is manufactured adhering to the highest standards of quality and efficacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tabletImages.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-pfe-light transition-all group"
            >
              <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.brand} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-pfe-dark">{img.brand}</h3>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tablet</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
