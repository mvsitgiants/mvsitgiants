import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-light rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 border border-slate-200/80 flex flex-col">
      <div className="h-56 w-full overflow-hidden">
        <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src={product.image} alt={product.name} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-medium text-accent mb-2">{product.category}</p>
        <h3 className="text-xl font-semibold text-primary mb-3">{product.name}</h3>
        <p className="text-muted text-sm flex-grow mb-4">{product.description}</p>
        <div className="mt-auto">
            <a href="#" className="font-bold text-accent hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn More &rarr;
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;