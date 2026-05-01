import { useEffect } from 'react';
import { motion } from 'motion/react';
import { productCategories } from '../components/MainSections';

export default function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-blue-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 pt-10">
           <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Product Catalog</h1>
           <p className="text-blue-800/70 max-w-2xl mx-auto text-lg">Browse our comprehensive range of high-quality pharmaceutical products across various medical categories, ensuring healthcare accessibility for all.</p>
        </div>

        <div className="flex flex-col gap-16">
          {productCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-blue-100/50 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                 <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                   <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <h2 className="text-2xl font-bold text-pfe-dark">{category.name}</h2>
                   <p className="text-gray-500 text-sm">Showing {category.products.length} products in this category</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.products.map((product, pIdx) => {
                  // Creating a simple colorful placeholder image based on the product name so it looks nice
                  const seed = product;
                  const placeholderImg = `https://api.dicebear.com/9.x/shapes/svg?seed=${seed}&backgroundColor=f0f9ff`;
                  
                  const productImagesConfig: Record<string, string> = {
                    'Methimor': '/images/MAKE_IT_BRIGHT_202604151133.jpeg',
                    'Ibumor': '/images/Product_catalog_image_202604151121.jpeg',
                    'Morid': '/images/Product_catalog_image_202604151132.jpeg',
                    'Levo-M': '/images/Product_catalog_image_202604151133.jpeg',
                    'Gasidon': '/images/Use_the_provided_202604151121 (10).jpeg',
                    'Safkam': '/images/Use_the_provided_202604151121 (2).jpeg',
                    'RINGACIP': '/images/Use_the_provided_202604151121 (3).jpeg',
                    'TRIOMOR': '/images/Use_the_provided_202604151121 (4).jpeg',
                    'Montemore': '/images/Use_the_provided_202604151121 (5).jpeg',
                    'CombiCap': '/images/Use_the_provided_202604151121 (6).jpeg',
                    'HIDIN': '/images/Use_the_provided_202604151121 (7).jpeg',
                    'Gabimor': '/images/Use_the_provided_202604151121 (8).jpeg',
                    'MYRIVA': '/images/Use_the_provided_202604151121 (9).jpeg',
                    'Gem-Ton': '/images/Use_the_provided_202604151122 (1).jpeg',
                    'Amphozole': '/images/Use_the_provided_202604151122 (2).jpeg',
                    'SAFPEP': '/images/Use_the_provided_202604151122.jpeg',
                    'Feximor': '/images/Use_the_provided_202604151132 (1).jpeg',
                    'XIMEMOR': '/images/Use_the_provided_202604151132 (2).jpeg',
                    'Azydec': '/images/Use_the_provided_202604151132 (3).jpeg',
                  };

                  const productImage = productImagesConfig[product] || placeholderImg;

                  return (
                    <motion.div 
                      key={pIdx}
                      whileHover={{ y: -5 }}
                      className="group flex flex-col bg-slate-50 rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-6">
                         {/* Fallback pattern if images are not uploaded, using dicebear abstraction or could use unsplash source. Since they're medical, let's use a nice geometric shape or unsplash query */}
                         <img 
                           src={productImage} 
                           alt={product}
                           className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                           onError={(e) => {
                             if (e.currentTarget.src !== placeholderImg) {
                               e.currentTarget.src = placeholderImg;
                             }
                           }}
                         />
                      </div>
                      <div className="p-4 border-t border-gray-100 bg-white flex-grow">
                        <h3 className="font-bold text-pfe-dark text-lg mb-1">{product}</h3>
                        <div className="flex gap-2 items-center mt-2">
                           <span className="text-[10px] font-bold uppercase tracking-wider text-pfe-light bg-blue-50 px-2 py-1 rounded">
                             {category.name}
                           </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
