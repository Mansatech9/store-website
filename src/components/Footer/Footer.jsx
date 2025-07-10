import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
  ChevronUp,
  Apple,
  PlaySquare,
} from "lucide-react";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    category: false,
    company: false,
    account: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
    <footer className="border-t  border-gray-200 pt-12 pb-4">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row gap-4 mb-20 lg:mb-8">
          <div className="w-full lg:w-[25%] ">
          
            <div className="flex items-center mb-4">
              <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Grabit</span>
            </div>

           
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Grabit is the biggest market of grocery products. Get your daily
              needs from our store.
            </p>

         
            <div className="flex flex-col md:flex-row items-center  justify-start gap-2">
      
              <div className="flex items-center bg-gray-900 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors w-full md:w-auto">
                <PlaySquare className="mr-2" />
                <div className="flex flex-col leading-tight">
                  <div className="text-[10px] uppercase">GET IT ON</div>
                  <div className="text-xs font-medium truncate">
                    Google Playg
                  </div>
                </div>
              </div>

        
              <div className="flex items-center bg-gray-900 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors w-full md:w-auto">
                <Apple className="mr-2" />
                <div className="flex flex-col leading-tight">
                  <div className="text-[10px] uppercase">DOWNLOAD ON</div>
                  <div className="text-xs font-medium truncate">App Store</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:hidden space-y-4  ">
            {/* Category */}
            <div className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-900"
                onClick={() => toggleSection("category")}
              >
                Category
                {openSections.category ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`mt-2 ${openSections.category ? "block" : "hidden"}`}
              >
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Dried Fruit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Foods
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Fresh Fruit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Tuber Root
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Vegetables
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company */}
            <div className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-900"
                onClick={() => toggleSection("company")}
              >
                Company
                {openSections.company ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`mt-2 ${openSections.company ? "block" : "hidden"}`}
              >
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Legal Notice
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Terms & conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Secure payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Account */}
            <div className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-900"
                onClick={() => toggleSection("account")}
              >
                Account
                {openSections.account ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`mt-2 ${openSections.account ? "block" : "hidden"}`}
              >
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      View Cart
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Return Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Become a Vendor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Payments
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-900"
                onClick={() => toggleSection("contact")}
              >
                Contact
                {openSections.contact ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`mt-2 ${openSections.contact ? "block" : "hidden"}`}
              >
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-600 text-sm">
                      <div>2548 Broaddus Maple Court,</div>
                      <div>Madisonville KY 4783, USA.</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <a
                      href="tel:+009876543210"
                      className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                    >
                      +00 987654320
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <a
                      href="mailto:example@email.com"
                      className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                    >
                      example@email.com
                    </a>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden w-full lg:grid lg:grid-cols-4 lg:w-[75%] ">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Category
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Dried Fruit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Foods
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Fresh Fruit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Tuber Root
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Vegetables
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Legal Notice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Secure payment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Account
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    View Cart
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Become a Vendor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-600 text-sm">
                    <div>2548 Broaddus Maple Court,</div>
                    <div>Madisonville KY 4783, USA.</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a
                    href="tel:+009876543210"
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    +00 987654320
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a
                    href="mailto:example@email.com"
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    example@email.com
                  </a>
                </div>

                <div className="flex space-x-3 pt-2">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
      
      </div>
    </footer>
      <div className=" bg-gray-100 border-t border-gray-200 pt-2 pb-2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

     
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
    
        <div className="text-gray-600 text-sm text-center lg:text-left">
          Copyright © <span className="text-green-600">Grabit</span> all
          rights reserved. Powered by{" "}
          <span className="text-green-600">Grabit</span>.
        </div>

        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {/* Visa */}
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">VISA</span>
            </div>

            {/* Mastercard */}
            <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">MC</span>
            </div>

            {/* PayPal */}
            <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">PP</span>
            </div>

            {/* Skrill */}
            <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">SK</span>
            </div>

            {/* Maestro */}
            <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">MA</span>
            </div>

            {/* American Express */}
            <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AE</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
