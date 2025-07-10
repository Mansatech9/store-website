import React, { useState } from 'react';
import { 
  Search, 
  User, 
  Heart, 
  ShoppingCart, 
  Menu,
  Phone,
  MapPin,
  ChevronDown,
  Gift,
  Grid3X3,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-gray-100 border-b border-gray-200 hidden lg:block">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone size={12} />
                <span className="hidden sm:inline">+91 987 654 3210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="hidden sm:inline">+91 987 654 3210</span>
              </div>
            </div>
            
            <div className="text-gray-600 font-medium hidden xl:block">
              World's Fastest Online Shopping Destination
            </div>
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer hidden sm:inline">Help?</span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer hidden sm:inline">Track Order?</span>
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                <span className="hidden sm:inline">Dollar</span>
                <span className="sm:hidden">$</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[85rem] mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
         
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">Grabit</span>
              </div>
            </div>

            
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="category"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Search size={20} />
                </button>
              </div>
            </div>

       
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                <User size={20} />
                <div className="flex flex-col text-sm">
                  <span className="text-xs">Account</span>
                  <span className="font-medium">LOGIN</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                <Heart size={20} />
                <div className="flex flex-col text-sm">
                  <span className="text-xs">Wishlist</span>
                  <span className="font-medium">3-ITEMS</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                <ShoppingCart size={20} />
                <div className="flex flex-col text-sm">
                  <span className="text-xs">Cart</span>
                  <span className="font-medium">3-ITEMS</span>
                </div>
              </div>
            </div>

           
            <div className="flex lg:hidden items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <Search size={20} />
              </button>
              <div className="flex items-center space-x-3">
                <button className="text-gray-600 hover:text-gray-900">
                  <Heart size={20} />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <ShoppingCart size={20} />
                </button>
              </div>
              <button 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
         
            <div className="flex items-center">
              <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                <Grid3X3 size={16} />
                <span className="font-medium">All Categories</span>
                <ChevronDown size={16} />
              </button>
            </div>

 
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-green-600 cursor-pointer">
                <span>Home</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-green-600 cursor-pointer">
                <span>Categories</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-green-600 cursor-pointer">
                <span>Products</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-green-600 cursor-pointer">
                <span>Blog</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-green-600 cursor-pointer">
                <span>Pages</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-2 text-gray-700 hover:text-green-600 cursor-pointer">
                <Gift size={16} />
                <span>Offers</span>
              </div>
            </div>

       
            <div className="flex items-center">
              <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                <MapPin size={16} />
                <span>New York</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;