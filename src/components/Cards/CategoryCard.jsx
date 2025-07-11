import React, { useState } from 'react';

const CategoryCard = ({ 
  icon: Icon, 
  title, 
  itemCount, 
  percentage, 
  gradientFrom, 
  gradientTo,
  iconColor = "text-teal-600"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-xl p-1 shadow-lg transition-all duration-300 ease-in-out aspect-square flex flex-col relative overflow-hidden group`}
      style={{
        backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
        '--tw-gradient-from': gradientFrom,
        '--tw-gradient-to': `${gradientTo}00`, 
        '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      {isHovered && (
        <>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm animate-pulse duration-1000" />
          <div className="absolute top-0 left-0 w-1 h-full bg-white/30 animate-slideDown origin-top duration-1000" />
        </>
      )}
      
      <div className={`relative bg-white rounded-lg p-4 shadow-sm border border-white/20 backdrop-blur-sm aspect-square flex flex-col transition-all duration-300 ease-in-out ${
        isHovered ? 'scale-95 bg-white/90' : 'scale-100'
      }`}>
   
        <div className={`absolute top-0 right-0 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg rounded-tr-lg transition-all duration-300 ease-in-out ${
          isHovered ? 'scale-110 bg-teal-600' : ''
        }`}>
          {percentage}%
        </div>
        
        <div className='flex flex-col items-center m-auto space-y-3'>
      
          <div className={`mb-2 transition-all duration-500 ease-in-out ${
            isHovered ? 'rotate-12 scale-125' : ''
          }`}>
            <Icon className={`w-8 h-8 ${iconColor} transition-colors duration-300 ${
              isHovered ? 'text-teal-700' : ''
            }`} />
          </div>
          
        
          <h3 className={`text-gray-800 font-semibold text-sm mb-1 line-clamp-2 text-center transition-all duration-300 ${
            isHovered ? 'text-black font-bold scale-105' : ''
          }`}>
            {title}
          </h3>
          
      
          <p className={`text-gray-600 text-xs font-medium transition-all duration-300 ${
            isHovered ? 'text-gray-800 scale-110' : ''
          }`}>
            {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
          </p>
          
      
          <div className={`mt-2 text-center transition-all duration-300 overflow-hidden ${
            isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
      
    
      <div className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{
        boxShadow: `0 0 20px 5px ${gradientFrom}80`
      }} />
    </div>
  );
};

export default CategoryCard;