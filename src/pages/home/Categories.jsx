import React from 'react'
import { Apple, Croissant, Carrot, Milk, Cookie, Coffee, Pizza, Fish, Beef, Candy } from 'lucide-react'
import CategoryCard from '../../components/Cards/CategoryCard';


const Categories = () => {
  const categoriesData = [
    {
      icon: Apple,
      title: "Fruits",
      itemCount: 320,
      percentage: 30,
      gradientFrom: "#dcfce7", // from-green-100
      gradientTo: "#bbf7d0",   // to-green-200
      iconColor: "text-green-600"
    },
    {
      icon: Carrot,
      title: "Vegetables",
      itemCount: 548,
      percentage: 15,
      gradientFrom: "#fee2e2", // from-red-100
      gradientTo: "#fbcfe8",   // to-pink-200
      iconColor: "text-red-600"
    },
    {
      icon: Milk,
      title: "Dairy & Milk",
      itemCount: 48,
      percentage: 10,
      gradientFrom: "#f3e8ff", // from-purple-100
      gradientTo: "#e9d5ff",   // to-purple-200
      iconColor: "text-purple-600"
    },
    {
      icon: Cookie,
      title: "Snack & Spice",
      itemCount: 59,
      percentage: 8,
      gradientFrom: "#fef9c3", // from-yellow-100
      gradientTo: "#fef08a",   // to-yellow-200
      iconColor: "text-yellow-600"
    },
    {
      icon: Coffee,
      title: "Juice & Drinks",
      itemCount: 845,
      percentage: 12,
      gradientFrom: "#dbeafe", // from-blue-100
      gradientTo: "#bfdbfe",   // to-blue-200
      iconColor: "text-blue-600"
    },
    {
      icon: Pizza,
      title: "Fast Food",
      itemCount: 156,
      percentage: 18,
      gradientFrom: "#ffedd5", // from-orange-100
      gradientTo: "#fed7aa",   // to-orange-200
      iconColor: "text-orange-600"
    },
   
  ];

  return (
    <div className="w-full py-8 ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-medium text-gray-900">Shop by Categories</h2>
          <p className="text-gray-600 font-mono mt-2">Browse through our wide variety of products</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {categoriesData.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              itemCount={category.itemCount}
              percentage={category.percentage}
              gradientFrom={category.gradientFrom}
              gradientTo={category.gradientTo}
              iconColor={category.iconColor}
            />
          ))}
        </div>

    
        
      </div>
    </div>
  )
}

export default Categories