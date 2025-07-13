import React, { useState } from 'react';
import { ChevronDown, Trash2, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';

const Cart = () => {
  const [summaryOpen, setSummaryOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [selectedState, setSelectedState] = useState('Please Select a region, state');
  const [zipCode, setZipCode] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Crunchy Triangle Chips Snacks',
      price: 56.00,
      quantity: 1,
      image: 'https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/6_1.jpg'
    },
    {
      id: 2,
      name: 'Dates Value Pack Pouch',
      price: 75.00,
      quantity: 1,
      image: 'https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/2_1.jpg'
    },
    {
      id: 3,
      name: 'Californian Almonds Value Pack',
      price: 48.00,
      quantity: 1,
      image: 'https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/3_1.jpg'
    },
    {
      id: 4,
      name: 'Banana Chips Snacks & Spices',
      price: 95.00,
      quantity: 1,
      image: 'https://maraviyainfotech.com/projects/grabit-react/assets/img/product-images/9_1.jpg'
    }
  ]);

  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'India'];
  const states = ['California', 'New York', 'Texas', 'Florida', 'Illinois'];

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharges = 0.00;
  const total = subtotal + deliveryCharges;

  return (
    <div className="w-full py-8  min-h-screen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          {/* Left Column - Summary and Shipping */}
          <div className="w-full lg:w-[35%] space-y-6">
            {/* Summary Section */}
            <div className="bg-white rounded-md  border border-gray-200">
              <button
                onClick={() => setSummaryOpen(!summaryOpen)}
                className="w-full p-3 flex items-center justify-between text-left hover:bg-gray-50 rounded-t-lg"
              >
                <h2 className="text-lg font-medium text-gray-900">Summary</h2>
                <ChevronDown className={`w-5 h-5 text-gray-400 transform transition-transform ${summaryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {summaryOpen && (
                <>
                    <div className="bg-white ">
                    <button
                      onClick={() => setShippingOpen(!shippingOpen)}
                      className="w-full p-3 flex items-center justify-between text-left hover:bg-gray-50 rounded-t-lg"
                    >
                      <h2 className="text-lg  text-gray-600">Estimate Shipping</h2>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transform transition-transform ${shippingOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {shippingOpen && (
                      <div className="px-4 pb-4  space-y-4">
                        <hr className='text-gray-200'/>
                        <p className="text-gray-600 text-sm">Enter your destination to get a shipping estimate</p>
                        
                        {/* Country Dropdown */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <button
                              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                              className="w-full p-3 border border-gray-200 rounded-md bg-white text-left flex items-center justify-between hover:border-gray-400 focus:outline-none "
                            >
                              <span className="text-gray-700">{selectedCountry}</span>
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            </button>
                            {countryDropdownOpen && (
                              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md ">
                                {countries.map((country) => (
                                  <button
                                    key={country}
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setCountryDropdownOpen(false);
                                    }}
                                    className="w-full p-3 text-left hover:bg-gray-50 text-gray-600"
                                  >
                                    {country}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
      
                        {/* State Dropdown */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
                          <div className="relative">
                            <button
                              onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                              className="w-full p-3 border border-gray-200 rounded-md bg-white text-left flex items-center justify-between hover:border-gray-400 focus:outline-none "
                            >
                              <span className={`${selectedState === 'Please Select a region, state' ? 'text-gray-400' : 'text-gray-700'}`}>
                                {selectedState}
                              </span>
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            </button>
                            {stateDropdownOpen && (
                              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md ">
                                {states.map((state) => (
                                  <button
                                    key={state}
                                    onClick={() => {
                                      setSelectedState(state);
                                      setStateDropdownOpen(false);
                                    }}
                                    className="w-full p-3 text-left hover:bg-gray-50  text-gray-600 "
                                  >
                                    {state}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
      
                        {/* Zip Code */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Zip/Postal Code</label>
                          <input
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="Zip/Postal Code"
                            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none "
                          />
                        </div>
                      </div>
                    )}
                  </div>
                <div className="px-4 pb-4  space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm ">
                      <span className="text-gray-600">Sub-Total</span>
                      <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm ">
                      <span className="text-gray-600">Delivery Charges</span>
                      <span className="text-gray-900 font-medium">${deliveryCharges.toFixed(2)}</span>
                    </div>
                    
                    {/* Coupon Section */}
                    <div className=" pt-4">
                      <div className="flex justify-between items-center mb-3 text-sm ">
                        <span className="text-gray-600">Coupon Discount</span>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Apply Coupon
                        </button>
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter Your Coupon Code"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
                          Apply
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4 text-md font-medium">
                      <div className="flex justify-between items-center text-lg ">
                        <span className="text-gray-900">Total Amount</span>
                        <span className="text-gray-900">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              )}
            </div>

            {/* Shipping Section */}
        
          </div>

          {/* Right Column - Cart Items and Checkout */}
          <div className="w-full  lg:w-[65%]  space-y-6">
            {/* Cart Header */}
            {/* <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-gray-900">Shopping Cart</h2>
              <span className="text-sm text-gray-600">{cartItems.length} Items</span>
            </div> */}

            {/* Cart Items */}
            <div className="bg-white ">
              <div className="p-4 border-b-2 border-gray-200">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-1 text-center">Total</div>
                  <div className="col-span-1"></div>
                </div>
              </div>

              <div className=" divide-y  divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-6 flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="  text-gray-600">{item.name}</h3>
                        </div>
                      </div>
                      <div className="col-span-2 text-center text-gray-800 font-medium">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="col-span-2 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="w-6 text-center font-medium text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="col-span-1 text-center font-medium text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className="col-span-1 text-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping and Checkout */}
              <div className="p-4 flex flex-row items-center justify-between border-t border-gray-200">
                <button className="text-gray-600 hover:text-blue-800 text-sm font-medium flex items-center">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Continue Shopping
                </button>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 font-medium">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;