import React, { useState, useRef } from 'react';
import { Star, Heart, Eye, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import ProductCard from '../../components/Cards/ProductCard';
import ProductViewCard from '../../components/Cards/ProductViewCard';

const ProductDetails = () => {
  const [selectedWeight, setSelectedWeight] = useState('250g');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState(null);
      const handleProductView = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
      };
  
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
  const productImages = [
    "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/6_1.jpg",
    "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/6_2.jpg",
    "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_1.jpg",
    "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_2.jpg"
  ];

  const weightOptions = ['250g', '500g', '1kg', '2kg'];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${index < rating ? 'text-orange-400 fill-orange-400' : 'text-gray-300'}`}
      />
    ));
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Bound the coordinates to prevent overflow
    const boundedX = Math.max(0, Math.min(x, 100));
    const boundedY = Math.max(0, Math.min(y, 100));

    setZoomPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Product Images */}
          <div className="space-y-4 border p-1 rounded-md border-gray-200 ">
            {/* Main Product Image */}
            <div className="relative bg-gray-100  rounded-lg overflow-hidden aspect-square">
              <div
                ref={imageRef}
                className="relative w-full h-full cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={productImages[currentImageIndex]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
               
                
                {/* Zoom Effect */}
                {showZoom && (
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={productImages[currentImageIndex]}
                      alt="Product - Zoomed"
                      className="w-full h-full object-cover"
                      style={{
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        transform: 'scale(2)',
                      }}
                    />
                    {/* Zoom indicator */}
                    <div
                      className="absolute border-2 border-white rounded-full pointer-events-none shadow-lg"
                      style={{
                        width: '1px',
                        height: '1px',
                        left: `calc(${zoomPosition.x}% - 75px)`,
                        top: `calc(${zoomPosition.y}% - 75px)`,
                      }}
                    />
                  </div>
                )}
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="space-y-6 relative">
          

            {/* Product Title */}
            <div>
              <h1 className="text-2xl font-medium text-gray-800 mb-2">
                Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {renderStars(4)}
                </div>
                <span className="text-sm text-gray-500">992 Ratings</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">$664.00</span>
              <span className="text-lg text-gray-500 line-through">$2,999.00</span>
              <span className="text-green-600 font-medium">-78%</span>
            </div>

            {/* SKU and Stock */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">SKU#: WH12</span>
              <span className="text-sm text-green-600">IN STOCK</span>
            </div>

            {/* MRP */}
            <div className="text-sm text-gray-600">
              M.R.P.: $2,999.00
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            {/* Product Details */}
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="text-gray-600 w-32">Closure:</span>
                <span className="text-gray-900">Hook & Loop</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-32">Sole:</span>
                <span className="text-gray-900">Polyvinyl Chloride</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-32">Width:</span>
                <span className="text-gray-900">Medium</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-32">Outer Material:</span>
                <span className="text-gray-900">A-Grade Standard Quality</span>
              </div>
            </div>

            {/* Weight Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                WEIGHT
              </label>
              <div className="flex flex-wrap gap-2">
                {weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-4 py-2 border rounded text-sm font-medium transition-colors ${
                      selectedWeight === weight
                        ? 'bg-blue-900 text-white border-blue-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => handleQuantityChange('decrement')}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-center min-w-[3rem]">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange('increment')}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-blue-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors font-medium">
                ADD TO CART
              </button>

              <button className="p-3 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              <button className="p-3 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

       
        <div className="mt-8">
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="bg-gray-200/70 flex  flex-row items-center gap-4 rounded-md shadow-sm border border-gray-200 p-2">
              <div className=" border border-gray-200 rounded-md bg-white">
                <img
                  src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/8_1.jpg"
                  alt="Honey Spiced Nuts"
                  className="w-16 h-16 rounded-lg m-auto "
                />
              </div>
              <div>
              <h3 className="font-thin text-sm text-gray-600 mb-2">Honey Spiced Nuts</h3>
              <div className="flex items-center  space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">$32.00</span>
                <span className="text-gray-500 line-through text-sm">$45.00</span>
              </div>
              </div>
            </div>


            <div className="bg-gray-200/70 flex  flex-row items-center gap-4 rounded-md shadow-sm border border-gray-200 p-2">
              <div className=" border border-gray-200 rounded-md bg-white">
                <img
                  src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/8_1.jpg"
                  alt="Honey Spiced Nuts"
                  className="w-16 h-16 rounded-lg m-auto "
                />
              </div>
              <div>
              <h3 className="font-thin text-sm text-gray-600 mb-2">Dates Value Pouch</h3>
              <div className="flex items-center  space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">$56.00</span>
                <span className="text-gray-500 line-through text-sm">$60.00</span>
              </div>
              </div>
            </div>


            <div className="bg-gray-200/70 flex  flex-row items-center gap-4 rounded-md shadow-sm border border-gray-200 p-2">
              <div className=" border border-gray-200 rounded-md bg-white">
                <img
                  src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/8_1.jpg"
                  alt="Honey Spiced Nuts"
                  className="w-16 h-16 rounded-lg m-auto "
                />
              </div>
              <div>
              <h3 className="font-thin text-sm text-gray-600 mb-2">Graps Mix Snack</h3>
              <div className="flex items-center  space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">$28.00</span>
                <span className="text-gray-500 line-through text-sm">$45.00</span>
              </div>
              </div>
            </div>

          
      
          </div>
        </div>

      
        <div className="mt-12">
          <div className="flex space-x-2  ">
            <button className=" text-white px-6 py-2 rounded-md shadow-md border border-bule-600 bg-blue-900 font-medium">
              Detail
            </button>
            <button className="px-6 py-2  rounded-md border border-gray-200  ">
              Specifications
            </button>
            <button className=" px-6 py-2 rounded-md  border border-gray-200 ">
              Vendor
            </button>
            <button className=" px-6 py-2 rounded-md  border border-gray-200 ">
              Reviews
            </button>
          </div>

         
          <div className="mt-1 border border-gray-200 rounded-md p-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>




       

         <div className="mb-8 mt-20 flex flex-col   items-center justify-between gap-4">
          <div >
            <h2 className="text-3xl text-center font-medium text-gray-900">
              Related <span className="text-blue-900">Products</span>
            </h2>
            <p className="text-gray-600 font mt-2">
            Browse The Collection of Top Products
            </p>
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
                           onViewProduct={() => handleProductView(product)}
                         />
                       ))}
                     </div>   

      </div>
      {selectedProduct && (
    <ProductViewCard 
      isOpen={isModalOpen} 
      onClose={handleCloseModal}
      product={selectedProduct}
    />
  )}
    </div>
    
  );
};

export default ProductDetails;