import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import hero1 from '../../assets/home/hero1.jpg';
import hero2 from '../../assets/home/hero2.jpg';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="hero-section relative w-full bg-white overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1500}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          grabCursor={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full rounded-xl"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img 
                src={hero1} 
                alt="Fresh fruits"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-2xl text-white pl-8 lg:pl-16 py-12">
                  <p className="text-lg lg:text-xl text-blue-400 font-medium mb-4 transform transition-all duration-700 delay-100 ${activeSlide === 0 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}">
                    Starting at $ 29.99
                  </p>
                  <h1 className="text-3xl lg:text-5xl font-medium text-gray-600 mb-8 leading-tight transform transition-all duration-700 delay-200 ${activeSlide === 0 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}">
                    Explore fresh &  <br/> juicy fruits
                  </h1>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 transform ${activeSlide === 0 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} delay-300">
                    Shop Now
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">»</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img 
                src={hero2} 
                alt="Organic produce"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 flex items-center justify-end transition-opacity duration-1000 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-2xl text-white pr-8 lg:pr-16 py-12 text-right">
                  <p className="text-lg lg:text-xl text-blue-400 font-medium mb-4 transform transition-all duration-700 delay-100 ${activeSlide === 1 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}">
                    Premium Quality
                  </p>
                  <h1 className="text-3xl lg:text-5xl font-medium text-gray-600 mb-8 leading-tight transform transition-all duration-700 delay-200 ${activeSlide === 1 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}">
                  Oraganic & healthy <br/> vegetables
                  </h1>
                  <div className="flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 transform ${activeSlide === 1 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} delay-300">
                      Shop Now
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">»</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom CSS for Swiper  sometime work need to change in responisve */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 6px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-active {
          background: #10b981 !important;
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.8);
        }
        
        .swiper-pagination {
          bottom: 2rem !important;
        }
        
        .hero-section {
          position: relative;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;