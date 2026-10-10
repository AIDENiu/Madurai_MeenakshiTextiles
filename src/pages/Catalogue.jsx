import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

function Catalogue() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div>
      <div className="bg-ivory-dark py-16 text-center border-b border-black/5 fade-in">
        <div className="container">
          <span className="text-[0.85rem] uppercase tracking-[0.15em] text-maroon font-semibold block mb-2">Our Collection</span>
          <h1 className="text-[2rem] md:text-[2.5rem] mb-4">Product Catalogue</h1>
          <p className="text-neutral-500 max-w-[600px] mx-auto">
            Browse our extensive range of premium textiles. From elegant uniform sarees to vibrant colored fabrics, find exactly what your institution needs.
          </p>
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 lg:py-16">
        <aside className="w-full lg:w-[250px] shrink-0 fade-in" style={{animationDelay: '0.2s'}}>
          <div className="mb-8">
            <h3 className="font-sans text-base font-semibold text-maroon-dark mb-4 pb-2 border-b border-neutral-300">Categories</h3>
            <div className="flex flex-row flex-wrap lg:flex-col gap-2">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`
                    text-left px-4 py-2 lg:px-2 lg:py-2 text-[0.95rem] rounded transition duration-200 border border-ivory-dark lg:border-transparent bg-white lg:bg-transparent
                    ${activeCategory === category 
                      ? 'bg-maroon !text-white font-medium lg:border-transparent' 
                      : 'text-neutral-700 hover:bg-ivory-dark hover:text-maroon'}
                  `}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-grow">
          <p className="text-[0.9rem] text-neutral-500 mb-8 fade-in" style={{animationDelay: '0.3s'}}>
            Showing {filteredProducts.length} results
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="fade-in" style={{animationDelay: `${0.2 + (index * 0.1)}s`}}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-neutral-500">
              <p>No products found in this category.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Catalogue;
