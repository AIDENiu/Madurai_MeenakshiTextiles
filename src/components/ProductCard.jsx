import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition duration-300 flex flex-col h-full group fade-in">
      <div className="relative w-full pt-[133%] overflow-hidden bg-ivory-dark">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" 
          loading="lazy" 
        />
        <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-semibold uppercase text-maroon rounded-sm">
          {product.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl text-maroon-dark mb-2 leading-[1.3]">{product.name}</h3>
        <p className="text-[0.9rem] text-neutral-500 mb-6 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto mb-6 text-[0.85rem] text-neutral-700 space-y-1">
          {product.fabric && (
            <div><strong className="font-semibold text-neutral-900">Fabric:</strong> {product.fabric}</div>
          )}
          {product.colors && (
            <div><strong className="font-semibold text-neutral-900">Colors:</strong> {product.colors.join(', ')}</div>
          )}
        </div>

        <Link to={`/product/${product.id}`} className="btn btn-secondary w-full">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
