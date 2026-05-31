import React, { useEffect, useState } from 'react';
import {
    X,
    ShieldCheck,
    Truck,
    RotateCcw,
    ShoppingCart,
    Star
} from 'lucide-react';
import { useData } from '../../context/appContext';

const Modal = () => {

    const { addItem , selectedProduct ,setSelectedProduct } = useData();
    const handleAddToCart = ()=>{
        addItem(selectedProduct);
        setSelectedProduct(null);
    }


    const {
        title = "Premium Product",
        price = 0,
        originalPrice = 0,
        discount = 0,
        rating = 4.5,
        reviewsCount = 0,
        description = "Product description goes here.",
        specifications = [],
        shades = [],
        images
    } = selectedProduct || {};



    useEffect(() => {
        // Lock background scroll when modal opens
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!selectedProduct) return null;

    // Configuration grid for trust badges using Lucide components
    const TRUST_BADGES = [
        {
            icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
            label: "100% Secure"
        },
        {
            icon: <Truck className="w-5 h-5 text-blue-600" />,
            label: "Free Delivery"
        },
        {
            icon: <RotateCcw className="w-5 h-5 text-amber-500" />,
            label: "7-Day Returns"
        }
    ];

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => setSelectedProduct(null)} />

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all md:flex">

                {/* Close Button */}
                <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
                    aria-label="Close modal"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* LEFT COLUMN: Visuals & Variations */}
                <div className="flex flex-col items-center justify-between bg-gray-50/50 p-6 md:w-1/2 md:p-8">
                    {/* Main Placeholder Wrapper */}
                    <div className="flex aspect-square w-full max-w-[280px] items-center justify-center rounded-2xl bg-gray-100 text-gray-300">
                        {/* SVG layout placeholder matching image_3fba7b.png */}
                        images?<>
                            <img
          loading="lazy" src={images[0]} className='w-full h-full' alt="" />
                        </>:
                        <svg className="w-1/2 h-1/2 max-w-[120px]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" />
                            <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
                            <line x1="78.3" y1="21.7" x2="21.7" y2="78.3" />
                        </svg>
                    </div>

                    {/* Variants Segment */}
                    {shades.length > 0 && (
                        <div className="mt-6 w-full text-center">
                            <span className="text-xs font-bold tracking-wider text-gray-500 uppercase block mb-3">
                                Select Shade:
                            </span>
                            <div className="flex flex-wrap justify-center gap-3">
                                {shades.map((shade) => (
                                    <button
                                        key={shade}
                                        onClick={() => setSelectedShade(shade)}
                                        className={`rounded-xl px-4 py-2 text-sm font-semibold border-2 transition-all ${selectedShade === shade
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {shade}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN: Product Metadata & Purchasing Actions */}
                <div className="flex flex-col p-6 md:w-1/2 md:p-8 md:border-l md:border-gray-100">

                    {/* Tagline Badge */}
                    <div className="mb-2">
                        <span className="inline-block rounded-md bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
                            Free Delivery
                        </span>
                    </div>

                    {/* Product Header */}
                    <h2 className="text-2xl font-black text-slate-900 leading-snug tracking-tight pr-6">
                        {title}
                    </h2>

                    {/* Ratings Panel */}
                    <div className="mt-2.5 flex items-center gap-1.5 text-sm text-gray-500">
                        <div className="flex items-center text-amber-500 gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                            ))}
                        </div>
                        <span className="font-bold text-slate-800 ml-1">{rating}</span>
                        <span className="text-gray-400">({reviewsCount} customer reviews)</span>
                    </div>

                    {/* Pricing Highlight Card Block */}
                    <div className="mt-4 flex items-baseline gap-3 rounded-xl border border-gray-100 bg-slate-50/50 p-4">
                        <span className="text-3xl font-extrabold text-emerald-600">
                            ₹{price}
                        </span>
                        {originalPrice > price && (
                            <>
                                <span className="text-md text-gray-400 line-through">
                                    ₹{originalPrice}
                                </span>
                                <span className="text-sm font-bold text-rose-500">
                                    {discount}% Off
                                </span>
                            </>
                        )}
                    </div>

                    {/* Product Description */}
                    <div className="mt-5">
                        <h3 className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                            Product Description
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                            {description}
                        </p>
                    </div>

                    {/* Product Specifications */}
                    {specifications.length > 0 && (
                        <div className="mt-5">
                            <h3 className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                                Specifications
                            </h3>
                            <ul className="mt-1.5 space-y-1.5 text-sm font-medium text-slate-600">
                                {specifications.map((spec, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-gray-400 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                        <span>{spec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="mt-auto pt-6">
                        {/* Divider */}
                        <hr className="border-gray-100 mb-4" />

                        {/* Micro Trust Indicators Grid */}
                        <div className="grid grid-cols-3 gap-1 text-center mb-5">
                            {TRUST_BADGES.map((badge, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center gap-1">
                                    {badge.icon}
                                    <span className="text-[11px] font-bold text-slate-800 whitespace-nowrap">
                                        {badge.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Primary Action Button */}
                        <button
                            onClick={handleAddToCart}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-md font-bold text-white shadow-md shadow-blue-200 transition-all active:scale-[0.98] hover:bg-blue-700 hover:shadow-lg"
                        >
                            <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
                            Add to Shopping Bag
                        </button>
                    </div>

                </div>
            </div>
        </div>
     
    );
};

export default Modal;