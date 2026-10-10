import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-80px)] min-h-[560px] flex items-center overflow-hidden bg-[#f3e3c3]">
        {/* Background image: model stays on the right, nothing covers her */}
        <img
          src="/premium-saree-4k-bright.png"
          alt="Premium Sarees"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        />

        {/* Card sits slightly to the right with strong glassmorphism for text readability */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-[6%] xl:px-[7%]">
          <div
            className="w-full max-w-[650px] backdrop-blur-md  p-8 md:p-12 rounded-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.4)] animate-[slideUp_1s_ease-out_forwards]"
            style={{ backgroundColor: 'rgba(60, 40, 30, 0.1)' }}
          >
            <span className="font-sans text-[0.85rem] uppercase tracking-[0.2em] text-[#FFE866] mb-4 block font-bold">
              Premium Textile Collection
            </span>

            <h1
              className="font-serif text-[2.75rem] md:text-[4.5rem] text-white mb-6 leading-[1.1]"
              style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5)' }}
            >
              Elegance Woven in<br />Every Thread
            </h1>

            <p className="text-[1rem] md:text-[1.1rem] text-white/95 mb-10 max-w-[560px] leading-relaxed">
              Discover our exclusive collection of premium uniform sarees, colored sarees, and
              high-quality institutional fabrics. Crafted for durability and style.
            </p>

            <div className="flex flex-col md:flex-row gap-5">
              <Link
                to="/catalogue"
                className="px-8 py-3.5 bg-[#C9A354] text-[#3e2723] font-semibold text-[0.85rem] tracking-[0.05em] uppercase rounded-[3px] text-center transition duration-300 hover:brightness-110"
              >
                Explore Collection
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border border-white/60 hover:bg-white/10 text-white font-semibold text-[0.85rem] tracking-[0.05em] uppercase rounded-[3px] text-center transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-ivory py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-16 fade-in">
            <span className="text-[0.85rem] uppercase tracking-[0.15em] text-maroon font-semibold block mb-2">Our Bestsellers</span>
            <h2 className="text-[2rem] md:text-[2.5rem]">Featured Collection</h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalogue" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="bg-maroon-dark text-ivory py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16 fade-in">
            <span className="text-[0.85rem] uppercase tracking-[0.15em] text-gold font-semibold block mb-2">Why Choose Us</span>
            <h2 className="text-[2rem] md:text-[2.5rem] text-ivory">The Madurai Meenakshi Promise</h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 md:gap-12 text-center">
            <div className="p-8 fade-in">
              <div className="text-gold mb-6 inline-block">
                <Award size={48} />
              </div>
              <h3 className="font-serif text-[1.5rem] mb-4 text-gold-light">Premium Quality</h3>
              <p className="text-neutral-300 text-[0.95rem]">
                We source only the finest fabrics, ensuring our uniform sarees are durable, color-fast, and comfortable for all-day wear.
              </p>
            </div>

            <div className="p-8 fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-gold mb-6 inline-block">
                <CheckCircle size={48} />
              </div>
              <h3 className="font-serif text-[1.5rem] mb-4 text-gold-light">Bulk Capabilities</h3>
              <p className="text-neutral-300 text-[0.95rem]">
                Specialized in fulfilling large orders for institutions, schools, and hospitals with consistent quality and matching colors.
              </p>
            </div>

            <div className="p-8 fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-gold mb-6 inline-block">
                <Truck size={48} />
              </div>
              <h3 className="font-serif text-[1.5rem] mb-4 text-gold-light">Reliable Delivery</h3>
              <p className="text-neutral-300 text-[0.95rem]">
                Committed to timely delivery of your orders, ensuring your institution's uniform requirements are met without delay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
