import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        
          <div>
            <h2 className="text-lg font-semibold mb-4">Exclusive</h2>
            <p className="mb-2">Subscribe</p>
            <p className="text-sm text-gray-400 mb-4">
              Get 10% off your first order
            </p>

            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-2 text-sm outline-none w-full"
              />
              <button className="px-3">
                <FaPaperPlane />
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <p className="text-sm text-gray-400">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              exclusive@gmail.com
            </p>
            <p className="text-sm text-gray-400 mt-2">
              +88015-88888-9999
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Account</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">My Account</li>
              <li className="hover:text-white cursor-pointer">Login / Register</li>
              <li className="hover:text-white cursor-pointer">Cart</li>
              <li className="hover:text-white cursor-pointer">Wishlist</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms Of Use</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Download App</h2>
            <p className="text-sm text-gray-400 mb-3">
              Save $3 with App New User Only
            </p>

            <div className="flex items-center gap-3 mb-4">
              <img src="/Qr.svg" alt="QR" className="w-20 h-20" />
              <div className="flex flex-col gap-2">
                <img src="/store.svg" alt="Google Play" className="w-28" />
                <img src="/apple.svg" alt="App Store" className="w-28" />
              </div>
            </div>

            <div className="flex gap-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © Copyright 2025. All rights reserved
        </div>
      </div>
      <div className="">
        <h1></h1>
      </div>
    </footer >
  );
};

export default Footer;
