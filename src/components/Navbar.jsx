import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Wallet,
  Store,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useData } from "../context/appContext";

const Navbar = () => {
  const { cart , setCartOpen } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    "Today's Deal",
    "Best Sellers",
    "Featured Products",
    "Under 50 Rs",
    "Electronics",
    "Beauty & Personal Care",
    "Gifts",
    "Car & Bikes",
    "Toys and Games",
    "Download our App",
    "Contact Us",
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full shadow-md">
        {/* ================= MOBILE NAVBAR ================= */}
        <div className="lg:hidden bg-[#0278FF]">
          {/* Top Row */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2">
            <img
          loading="lazy"
              src="./Logo.png"
              alt="Sabka Fayda"
              className="h-10 object-contain"
            />

            <button onClick={()=>{
              setCartOpen(true)
              console.log("Opened")
              }} className="relative text-white">
              <ShoppingCart size={28} />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Search Row */}
          <div className="flex items-center gap-3 px-4 pb-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="h-10 w-full rounded-md bg-white pl-4 pr-10 text-sm text-gray-700 outline-none"
              />

              <Search
                size={22}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0278FF]"
              />
            </div>

            <button className="text-white">
              <Wallet size={24} />
            </button>

            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={32} />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden lg:block bg-[#0278FF]">
          {/* Delivery Bar */}
          <div className="flex justify-between items-center bg-black px-6 py-1 text-[11px] text-white">
            <div className="flex gap-8">
              <span>🚚 FREE Express Shipping on all products</span>
              <span>🚚 FREE Express Shipping on all products</span>
            </div>

            <div className="flex items-center gap-2">
              <span>📍 Delivering to Surat 394210</span>

              <button className="rounded bg-white px-2 py-0.5 text-[10px] font-bold text-[#0278FF]">
                Update
              </button>

              <span>🇮🇳 EN ▾</span>
            </div>
          </div>

          {/* Main Navbar */}
          <div className="flex items-center justify-around gap-4 px-4 py-2">
            {/* Logo */}
            <div className="w-[90px] flex-shrink-0">
              <img
          loading="lazy"
                src="./Logo.png"
                alt="Sabka Fayda"
                className="object-contain"
              />
            </div>

            {/* Search */}
            <div className="flex h-[40px] max-w-2xl flex-1 overflow-hidden rounded border-2 border-white/30">
              <div className="relative">
                <select
                  className="h-full appearance-none border-r border-gray-300 bg-gray-100 pl-3 pr-8 text-sm"
                >
                  <option>All Category</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Beauty</option>
                  <option>Home</option>
                </select>

                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
                />
              </div>

              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="flex-1 px-4 outline-none bg-white"
              />

              <button className="bg-white px-4 hover:bg-gray-200">
                <Search size={18} className="text-[#0278FF]" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-5">
              <button className="rounded bg-white px-5 py-2 text-sm font-semibold text-[#0278FF]">
                Login
              </button>

              <button className="flex flex-col items-center text-white">
                <Store size={20} />
                <span className="text-[11px]">
                  Become a Seller
                </span>
              </button>

              <button className="flex flex-col items-center text-white">
                <Wallet size={20} />
                <span className="text-[11px]">Wallet</span>
              </button>

              <button onClick={()=>{
                setCartOpen(true);
                console.log("Opened")
              }} className="relative flex flex-col items-center text-white">
                <ShoppingCart size={22} />

                {cart.length > 0 && (
                  <span className="absolute -top-2 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold">
                    {cart.length}
                  </span>
                )}

                <span className="text-[11px]">Cart</span>
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="border-t bg-white">
            <div className="flex justify-around overflow-x-auto">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className={`whitespace-nowrap px-3 py-2 text-[12px] font-medium ${
                    item === "Today's Deal"
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          mobileMenuOpen
            ? "visible bg-black/40"
            : "invisible bg-transparent"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white transition-transform duration-300 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold">Menu</h3>

            <button
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="/"
                className="border-b px-5 py-4 text-sm text-gray-700 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;