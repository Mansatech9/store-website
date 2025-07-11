import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/Cards/ProductCard';

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
      days: 25,
      hours: 23,
      minutes: 41,
      seconds: 16
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          const { days, hours, minutes, seconds } = prevTime;
          
    
          let newSeconds = seconds - 1;
          let newMinutes = minutes;
          let newHours = hours;
          let newDays = days;
  
          if (newSeconds < 0) {
            newSeconds = 59;
            newMinutes -= 1;
          }
  
          if (newMinutes < 0) {
            newMinutes = 59;
            newHours -= 1;
          }
  
          if (newHours < 0) {
            newHours = 23;
            newDays -= 1;
          }
  
        
          if (newDays <= 0 && newHours <= 0 && newMinutes <= 0 && newSeconds <= 0) {
            clearInterval(timer);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }
  
          return { 
            days: newDays, 
            hours: newHours, 
            minutes: newMinutes, 
            seconds: newSeconds 
          };
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
    const products = [
        {
          image: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/6_1.jpg",
          hoverImage: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/6_2.jpg",
          title: "Mixed Nuts Berries Pack",
          category: "Dried Fruits",
          price: "56.00",
          originalPrice: "45.00",
          rating: 4,
          onSale: true
        },
        {
          image: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_1.jpg",
          hoverImage: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_2.jpg",
          title: "Multi Grain Combo Cookies",
          category: "Cookies",
          price: "30.00",
          originalPrice: "25.00",
          rating: 3,
          weight: "10kg",
          onSale: true
        },
        {
          image: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/9_1.jpg",
          hoverImage: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/9_2.jpg",
          title: "Fresh Mango Juice Pack",
          category: "Foods",
          price: "65.00",
          originalPrice: "40.00",
          rating: 2,
          onSale: true
        },
        {
          image: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/2_1.jpg",
          hoverImage: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/2_2.jpg",
          title: "Dates Value Fresh Pouch",
          category: "Dried Fruits",
          price: "85.00",
          originalPrice: "70.00",
          rating: 3,
          onSale: true
        },
        {
          image: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/1_1.jpg",
          hoverImage: "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/1_2.jpg",
          title: "Stick Fiber Masala Magic",
          category: "Foods",
          price: "50.00",
          originalPrice: "45.00",
          rating: 2,
          weight: "2pack",
          isNew: true
        }
      ];
  return (
   <div className="w-full py-8 ">
         <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-8 flex justify-between items-center">
  <div>
    <h2 className="text-3xl font-medium text-gray-900">Day Of The Deal</h2>
    <p className="text-gray-600 font-mono mt-2">Don't wait. The time will never be just right.</p>
  </div>
  <div className="bg-[#f8f8fb] text-[#4b5966] px-4 py-2 rounded-md font-mono ">
            {timeLeft.days} Days {timeLeft.hours.toString().padStart(2, '0')}:
            {timeLeft.minutes.toString().padStart(2, '0')}:
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
</div>
           
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
             {products.map((product, index) => (
               <ProductCard
                 key={index}
                 image={product.image}
                 hoverImage={product.hoverImage}
                 title={product.title}
                 category={product.category}
                 price={product.price}
                 originalPrice={product.originalPrice}
                 rating={product.rating}
                 onSale={product.onSale}
                 isNew={product.isNew}
                 weight={product.weight}
               />
             ))}
           </div>
         </div>
       </div>
  )
}

export default DealOfTheDay