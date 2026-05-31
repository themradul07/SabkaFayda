import React from "react";
import { 
  Phone, 
  MapPin, 
  Mail, 
//   Facebook, 
//   Instagram, 
//   Linkedin, 
//   Twitter 
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#0278FF] text-white px-6 py-10 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Links Section */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="underline font-bold text-lg mb-4">About</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Our Services</li>
              </ul>
            </div>

            <div>
              <h3 className="underline font-bold text-lg mb-4">Help</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>Shipping</li>
                <li>Return and Cancellation</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="underline font-bold text-lg mb-4">Policy</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>Refund and Return Policy</li>
                <li>Privacy and Security Policy</li>
                <li>Cookies Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="underline font-bold text-lg mb-4">Contact Us</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="mt-1 shrink-0" />
                  <span>+91 832 960 6969</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 shrink-0" />
                  <span>
                    Plot No. 19/20, Sector F T, Parvati Industrial Estate, Yadrav,
                    Sub District Shirol, Dist. Kolhapur, Maharashtra, India, 416146
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="mt-1 shrink-0" />
                  <span>sabkafayda1@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 items-start">
            <div>
              <div className="text-2xl font-bold">
                <img src="./Logo.png" className="h-14 w-24 " alt="Logo" />
              </div>
              <p className="mt-2 text-lg font-medium">E-Commerce Platform</p>
            </div>

            <div>
              <h4 className="text-lg mb-4">Follow Us :</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                  {/* <Facebook size={20} /> */}
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                  {/* <Instagram size={20} /> */}
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  {/* <Linkedin size={20} /> */}
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                  {/* <Twitter size={20} /> */}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4">Download the App</h4>
              <button className="border border-white rounded-md px-4 py-2 text-sm font-medium hover:bg-white hover:text-[#0278FF] transition-colors">
                GET IT ON Google Play
              </button>
            </div>

            <div className="lg:text-right self-end">
              <p className="text-sm">@2026 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;