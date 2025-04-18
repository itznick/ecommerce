import React from "react";
import { Facebook, Instagram, Twitter, ShoppingBag } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto text-center md:grid-cols-3 md:text-left">
        <div>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold md:justify-start">
            <ShoppingBag size={28} /> EzCommerce
          </h2>
          <p className="mt-2 text-gray-400">
            Your go-to online store for all your shopping needs. Quality
            products, best prices.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-400 hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center mt-3 space-x-4 md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-4 mt-10 text-sm text-center text-gray-500 border-t border-gray-700">
        &copy; {new Date().getFullYear()} EzCommerce. All rights reserved.
        <span> Made by Nikhil Bhamare</span>
      </div>
    </footer>
  );
};

export default Footer;
