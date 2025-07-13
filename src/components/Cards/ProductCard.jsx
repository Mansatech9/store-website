import React, { useState } from 'react';
import { Star, StarHalf, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ 
  image, 
  hoverImage,
  title, 
  category, 
  price, 
  originalPrice, 
  rating = 0, 
  weight,
  onSale = false,
  isNew = false ,
  onViewProduct
}) => {
  const [isHovered, setIsHovered] = useState(false);


  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />
      );
    }
    
    return stars;
  };
  const handleViewProduct = () => {
    if (onViewProduct) {
      onViewProduct();
    }
  };
  return (
    <div 
      className="bg-white rounded-md border border-gray-200  hover:shadow-md transition-all duration-300 overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      {(onSale || isNew) && (
        <div className={`absolute top-2 left-2 z-10 px-2 py-1 rounded text-xs font-semibold text-white ${
          onSale ? 'bg-red-400' : 'bg-teal-500'
        }`}>
          {onSale ? 'SALE' : 'NEW'}
        </div>
      )}
      
     
      <div className="relative overflow-hidden bg-gray-50 aspect-square cursor-pointer">
        <img 
          src={isHovered && hoverImage ? hoverImage : image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
   
{isHovered && (
  <div className="absolute bottom-0 left-0 right-0  bg-opacity-90 bg-transparent flex items-center justify-center gap-4 p-2 transition-opacity duration-300">
    <button className="p-2 rounded-lg bg-white border border-gray-200 cursor-pointer hover:bg-blue-300 transition-colors duration-200">
      <ShoppingCart className="w-4 h-4 text-gray-900" />
    </button>
    <button 
     onClick={handleViewProduct}
    className="p-2 rounded-lg  bg-white border border-gray-200 cursor-pointer hover:bg-blue-300 transition-colors duration-200">
      <Eye className="w-4 h-4 text-gray-900" />
    </button>
  </div>
)}
      </div>
      
   
      <div className="p-4 space-y-2 border-t border-gray-200">
     
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {category}
        </p>
        
      
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
          {title}
        </h3>
        
       
        <div className="flex items-center gap-1">
          {renderStars(rating)}
        </div>
        
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          {weight && (
            <span className="text-xs text-gray-500 font-medium">
              {weight}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;