import React, { useState, useEffect } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import ProductViewCard from '../../components/Cards/ProductViewCard';


const NewArrival = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 300); // Match this duration with the transition duration in Tailwind
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    // Fruits (10 items)
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/6_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/6_2.jpg",
      title: "Mixed Nuts Berries Pack",
      category: "Fruits",
      price: "56.00",
      originalPrice: "45.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/9_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/9_2.jpg",
      title: "Fresh Mango Juice Pack",
      category: "Fruits",
      price: "65.00",
      originalPrice: "40.00",
      rating: 2,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/1_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/1_2.jpg",
      title: "Fresh Apples",
      category: "Fruits",
      price: "30.00",
      originalPrice: "25.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/2_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/2_2.jpg",
      title: "Organic Bananas",
      category: "Fruits",
      price: "20.00",
      originalPrice: "18.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_2.jpg",
      title: "Sweet Grapes",
      category: "Fruits",
      price: "35.00",
      originalPrice: "30.00",
      rating: 5,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/4_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/4_2.jpg",
      title: "Juicy Oranges",
      category: "Fruits",
      price: "25.00",
      originalPrice: "22.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/5_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/5_2.jpg",
      title: "Fresh Strawberries",
      category: "Fruits",
      price: "40.00",
      originalPrice: "35.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/7_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/7_2.jpg",
      title: "Pineapple Slices",
      category: "Fruits",
      price: "28.00",
      originalPrice: "25.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/8_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/8_2.jpg",
      title: "Kiwi Fruit Pack",
      category: "Fruits",
      price: "32.00",
      originalPrice: "30.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/10_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/10_2.jpg",
      title: "Watermelon Chunks",
      category: "Fruits",
      price: "18.00",
      originalPrice: "15.00",
      rating: 4,
      onSale: true,
    },

    // Vegetables (10 items)
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/11_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/11_2.jpg",
      title: "Fresh Carrots",
      category: "Vegetables",
      price: "15.00",
      originalPrice: "12.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/12_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/12_2.jpg",
      title: "Organic Tomatoes",
      category: "Vegetables",
      price: "20.00",
      originalPrice: "18.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/13_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/13_2.jpg",
      title: "Cucumber Pack",
      category: "Vegetables",
      price: "12.00",
      originalPrice: "10.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/14_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/14_2.jpg",
      title: "Bell Peppers Mix",
      category: "Vegetables",
      price: "22.00",
      originalPrice: "20.00",
      rating: 5,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/15_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/15_2.jpg",
      title: "Fresh Spinach",
      category: "Vegetables",
      price: "18.00",
      originalPrice: "15.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/16_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/16_2.jpg",
      title: "Broccoli Florets",
      category: "Vegetables",
      price: "25.00",
      originalPrice: "22.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/17_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/17_2.jpg",
      title: "Cauliflower Head",
      category: "Vegetables",
      price: "20.00",
      originalPrice: "18.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/18_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/18_2.jpg",
      title: "Zucchini",
      category: "Vegetables",
      price: "16.00",
      originalPrice: "14.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/19_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/19_2.jpg",
      title: "Eggplant",
      category: "Vegetables",
      price: "14.00",
      originalPrice: "12.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/20_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/20_2.jpg",
      title: "Green Beans",
      category: "Vegetables",
      price: "18.00",
      originalPrice: "15.00",
      rating: 3,
      isNew: true,
    },

    // Snacks & Spices (10 items)
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_2.jpg",
      title: "Multi Grain Combo Cookies",
      category: "Snacks & Spices",
      price: "30.00",
      originalPrice: "25.00",
      rating: 3,
      weight: "10kg",
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/21_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/21_2.jpg",
      title: "Potato Chips",
      category: "Snacks & Spices",
      price: "15.00",
      originalPrice: "12.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/22_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/22_2.jpg",
      title: "Mixed Nuts",
      category: "Snacks & Spices",
      price: "35.00",
      originalPrice: "30.00",
      rating: 5,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/23_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/23_2.jpg",
      title: "Chocolate Cookies",
      category: "Snacks & Spices",
      price: "20.00",
      originalPrice: "18.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/24_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/24_2.jpg",
      title: "Cinnamon Powder",
      category: "Snacks & Spices",
      price: "12.00",
      originalPrice: "10.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/25_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/25_2.jpg",
      title: "Turmeric Powder",
      category: "Snacks & Spices",
      price: "10.00",
      originalPrice: "8.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/26_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/26_2.jpg",
      title: "Chili Flakes",
      category: "Snacks & Spices",
      price: "8.00",
      originalPrice: "7.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/27_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/27_2.jpg",
      title: "Garlic Powder",
      category: "Snacks & Spices",
      price: "9.00",
      originalPrice: "8.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/28_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/28_2.jpg",
      title: "Oregano Seasoning",
      category: "Snacks & Spices",
      price: "11.00",
      originalPrice: "10.00",
      rating: 5,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/29_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/29_2.jpg",
      title: "Black Pepper",
      category: "Snacks & Spices",
      price: "14.00",
      originalPrice: "12.00",
      rating: 4,
      onSale: true,
    },

    // Dried Fruits (10 items)
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/2_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/2_2.jpg",
      title: "Dates Value Fresh Pouch",
      category: "Dried Fruits",
      price: "85.00",
      originalPrice: "70.00",
      rating: 3,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/30_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/30_2.jpg",
      title: "Dried Apricots",
      category: "Dried Fruits",
      price: "25.00",
      originalPrice: "22.00",
      rating: 4,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/31_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/31_2.jpg",
      title: "Raisins Pack",
      category: "Dried Fruits",
      price: "18.00",
      originalPrice: "15.00",
      rating: 3,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/32_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/32_2.jpg",
      title: "Dried Figs",
      category: "Dried Fruits",
      price: "30.00",
      originalPrice: "28.00",
      rating: 5,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/33_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/33_2.jpg",
      title: "Dried Cranberries",
      category: "Dried Fruits",
      price: "22.00",
      originalPrice: "20.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/34_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/34_2.jpg",
      title: "Dried Mango Slices",
      category: "Dried Fruits",
      price: "28.00",
      originalPrice: "25.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/35_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/35_2.jpg",
      title: "Dried Pineapple",
      category: "Dried Fruits",
      price: "24.00",
      originalPrice: "22.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/36_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/36_2.jpg",
      title: "Dried Banana Chips",
      category: "Dried Fruits",
      price: "16.00",
      originalPrice: "14.00",
      rating: 3,
      isNew: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/37_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/37_2.jpg",
      title: "Dried Papaya",
      category: "Dried Fruits",
      price: "20.00",
      originalPrice: "18.00",
      rating: 4,
      onSale: true,
    },
    {
      image:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/38_1.jpg",
      hoverImage:
        "https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/38_2.jpg",
      title: "Dried Coconut Chips",
      category: "Dried Fruits",
      price: "19.00",
      originalPrice: "17.00",
      rating: 5,
      isNew: true,
    },
  ];

  const handleProductView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getMixedProducts = () => {
    
    const fruits = products.filter(p => p.category === 'Fruits');
    const vegetables = products.filter(p => p.category === 'Vegetables');
    const snacks = products.filter(p => p.category === 'Snacks & Spices');
    const dried = products.filter(p => p.category === 'Dried Fruits');
    
   
    const shuffledFruits = [...fruits].sort(() => 0.5 - Math.random()).slice(0, 3);
    const shuffledVeggies = [...vegetables].sort(() => 0.5 - Math.random()).slice(0, 2);
    const shuffledSnacks = [...snacks].sort(() => 0.5 - Math.random()).slice(0, 3);
    const shuffledDried = [...dried].sort(() => 0.5 - Math.random()).slice(0, 2);
    
   
    return [...shuffledFruits, ...shuffledVeggies, ...shuffledSnacks, ...shuffledDried]
      .sort(() => 0.5 - Math.random());
  };
  const filteredProducts = activeCategory === 'All' 
      ? getMixedProducts().slice(0, 10) 
      : products.filter(product => product.category === activeCategory).slice(0, 10); 

  return (
    <div className="w-full py-8">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div >
            <h2 className="text-3xl font-medium text-gray-900">
              New <span className="text-green-900">Arrivals</span>
            </h2>
            <p className="text-gray-600 font mt-2">
              Shop online for new arrivals and get free shipping.
            </p>
          </div>
          <div className="flex flex-wrap  ">
            <button
              onClick={() => handleCategoryChange("All")}
              className={`px-4 py-2  cursor-pointer  transition-colors duration-200 ${
                activeCategory === "All"
                  ? " text-green-900"
                  : " text-gray-800 hover:text-green-900"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryChange("Snacks & Spices")}
              className={`px-4 py-2  cursor-pointer transition-colors duration-200 ${
                activeCategory === "Snacks & Spices"
                     ? " text-green-900"
                  : " text-gray-800 hover:text-green-900"
              }`}
            >
              Snacks & Spices
            </button>
            <button
              onClick={() => handleCategoryChange("Fruits")}
              className={`px-4 py-2  cursor-pointer  transition-colors duration-200 ${
                activeCategory === "Fruits"
                  ? " text-green-900"
                  : " text-gray-800 hover:text-green-900"
              }`}
            >
              Fruits
            </button>
            <button
              onClick={() => handleCategoryChange("Vegetables")}
              className={`px-4 py-2   cursor-pointer transition-colors duration-200 ${
                activeCategory === "Vegetables"
                    ? " text-green-900"
                  : " text-gray-800 hover:text-green-900"
              }`}
            >
              Vegetables
            </button>
            <button
              onClick={() => handleCategoryChange("Dried Fruits")}
              className={`px-4 py-2  cursor-pointer transition-colors duration-200 ${
                activeCategory === "Dried Fruits"
                      ? " text-green-900"
                  : " text-gray-800 hover:text-green-900"
              }`}
            >
              Dried Fruits
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredProducts.map((product, index) => (
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

export default NewArrival;
