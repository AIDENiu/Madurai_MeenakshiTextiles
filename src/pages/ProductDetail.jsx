import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (!product) {
      // Handle not found
      navigate('/catalogue');
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="container py-16 fade-in">
      <Link to="/catalogue" className="inline-flex items-center gap-2 mb-8 text-maroon hover:text-maroon-dark transition duration-200 font-medium">
        <ArrowLeft size={20} /> Back to Catalogue
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        <div className="bg-ivory-dark">
          <img src={product.image} alt={product.name} className="w-full h-full min-h-[500px] lg:max-h-none max-h-[500px] object-cover" />
        </div>
        
        <div className="p-8 md:p-12 lg:p-16 lg:pl-0 flex flex-col">
          <span className="text-[0.85rem] uppercase tracking-[0.15em] text-maroon font-semibold mb-4">{product.category}</span>
          <h1 className="text-[2rem] md:text-[2.5rem] mb-6">{product.name}</h1>
          <p className="text-[1.1rem] text-neutral-500 mb-8 leading-[1.8]">{product.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-x-8 md:gap-y-4 mb-12 py-8 border-y border-neutral-300">
            {product.fabric && (
              <>
                <div className="font-semibold text-neutral-900 md:mb-0 -mb-2">Fabric</div>
                <div className="text-neutral-700">{product.fabric}</div>
              </>
            )}
            
            {product.colors && (
              <>
                <div className="font-semibold text-neutral-900 md:mb-0 -mb-2">Available Colors</div>
                <div className="flex gap-2 flex-wrap text-neutral-700">
                  {product.colors.map(color => (
                    <span key={color} className="px-3 py-1 bg-ivory-dark rounded-full text-[0.85rem] text-neutral-700">{color}</span>
                  ))}
                </div>
              </>
            )}
          </div>
          
          <div className="mt-auto flex flex-col md:flex-row gap-4">
            <Link to="/contact" state={{ interestedIn: product.name }} className="btn btn-primary flex-1">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
